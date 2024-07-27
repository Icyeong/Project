import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "./FeedList.style";
import Feed, { FeedProps } from "@components/molecules/feed/Feed";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { FeedService } from "@/_services/feed_service";
import FeedSkeleton from "./FeedSkeleton";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useInfiniteQuery } from "@tanstack/react-query";
import debounce from "lodash/debounce";

export default function FeedList() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [feedHeights, setFeedHeights] = useState<number[]>([]);
  const { fetchNextPage, data, isLoading } = useInfiniteQuery({
    queryKey: QUERY_KEYS.FEED.LIST.queryKey,
    queryFn: ({ pageParam = 0 }) => FeedService.getFeedsList(pageParam),
    gcTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
  });

  const handleFetchNextPage = useCallback(debounce(fetchNextPage, 300, { leading: false, trailing: true }), [
    fetchNextPage,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      if (clientHeight + scrollTop > scrollHeight - 300) {
        handleFetchNextPage();
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleFetchNextPage.cancel();
    };
  }, [fetchNextPage]);

  useEffect(() => {
    if (data) {
      const newHeights = data.pages.flatMap((page) => page.feeds).map(() => 800);
      setFeedHeights(newHeights);
    }
  }, [data]);

  const updateSize = (idx: number, size: number) => {
    setFeedHeights((prev) => {
      const newHeights = [...prev];
      newHeights[idx] = size;
      rowVirtualizer.resizeItem(idx, size);
      return newHeights;
    });
  };

  const rowVirtualizer = useVirtualizer({
    count: data?.pages.flatMap((page) => page.feeds).length ?? 0,
    getScrollElement: useCallback(() => parentRef.current, []),
    estimateSize: (idx) => feedHeights[idx] || 800,
  });

  return (
    <>
      {isLoading && <FeedSkeleton />}
      <Container
        ref={parentRef}
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {data &&
          !isLoading &&
          rowVirtualizer.getVirtualItems().map((virtualItem) => {
            const list = data.pages.flatMap((page) => page.feeds);
            const feed: FeedProps = list[virtualItem.index];
            return (
              <div
                key={virtualItem.key}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                <Feed onSizeChange={(size) => updateSize(virtualItem.index, size + 20)} {...feed} />
              </div>
            );
          })}
      </Container>
    </>
  );
}

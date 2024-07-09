import React, { useEffect, useRef } from "react";
import { Container } from "./FeedList.style";
import Feed from "@components/molecules/feed/Feed";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { FeedService } from "@/_services/feed_service";
import FeedSkeleton from "./FeedSkeleton";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function FeedList() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const { fetchNextPage, data, isLoading, hasNextPage } = useInfiniteQuery({
    queryKey: QUERY_KEYS.FEED.LIST.queryKey,
    queryFn: ({ pageParam = 0 }) => FeedService.getFeedsList(pageParam),
    gcTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      if (clientHeight + scrollTop > scrollHeight - 300) {
        fetchNextPage();
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  const rowVirtualizer = useVirtualizer({
    count: data?.pages.flatMap((page) => page.feeds).length ?? 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 800,
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
            const feed = list[virtualItem.index];
            console.log("list : ", list);
            console.log("feed : ", feed);
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
                <Feed {...feed} />
              </div>
            );
          })}
      </Container>
    </>
  );
}

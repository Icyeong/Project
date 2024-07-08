import React, { useEffect } from "react";
import { Container } from "./FeedList.style";
import Feed, { FeedProps } from "@components/molecules/feed/Feed";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { FeedService } from "@/_services/feed_service";
import FeedSkeleton from "./FeedSkeleton";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function FeedList() {
  const { fetchNextPage, data, isLoading } = useInfiniteQuery({
    queryKey: QUERY_KEYS.FEED.LIST.queryKey,
    queryFn: FeedService.getFeedsList,
    gcTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
    initialPageParam: true,
    getNextPageParam: () => true,
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
  }, []);

  // const rowVirtualizer = useVirtualizer({
  //   count: 5,
  //   getScrollElement: () => parentRef.current,
  //   estimateSize: () => 850,
  // });

  return (
    <>
      {isLoading && <FeedSkeleton />}
      <Container
      // style={{
      //   height: `${rowVirtualizer.getTotalSize()}px`,
      //   width: "100%",
      //   position: "relative",
      // }}
      >
        {/* {data &&
          !isLoading &&
          rowVirtualizer.getVirtualItems().map((virtualItem) => {
            const feed = data[virtualItem.index];
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
          })} */}
        {data &&
          !isLoading &&
          data.pages.flatMap((page) => page.map((feed: FeedProps) => <Feed key={feed.feedId} {...feed} />))}
      </Container>
    </>
  );
}

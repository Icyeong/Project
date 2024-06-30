import React, { useEffect } from "react";
import { Container } from "./FeedList.style";
import Feed, { FeedProps } from "@components/molecules/feed/Feed";
import { useCustomQuery } from "@/_hooks/useFetch";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { FeedService } from "@/_services/feed_service";
import FeedSkeleton from "./FeedSkeleton";
import useFeedStore from "@/_stores/client/feedStore";

export default function FeedList() {
  const { data, isLoading } = useCustomQuery(QUERY_KEYS.FEED.LIST.queryKey, FeedService.getFeedsList, {
    gcTime: 1000 * 60 * 60,
    staleTime: 1000 * 60 * 60,
  });
  const { setFeedsState, feedList } = useFeedStore();

  useEffect(() => {
    if (data) {
      setFeedsState(data);
    }
  }, []);

  return (
    <>
      {isLoading && <FeedSkeleton />}
      <Container>{feedList && feedList.map((feed: FeedProps) => <Feed key={feed.feedId} {...feed} />)}</Container>
      {/* <Container>{data && !isLoading && data.map((feed: FeedProps) => <Feed key={feed.feedId} {...feed} />)}</Container> */}
    </>
  );
}

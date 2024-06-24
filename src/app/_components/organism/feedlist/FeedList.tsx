import React from "react";
import { Container } from "./FeedList.style";
import Feed, { FeedProps } from "../../molecules/feed/Feed";
import { useCustomQuery } from "@/app/_hooks/useFetch";
import { QUERY_KEYS } from "@/app/_stores/server/queryKeys";
import { FeedService } from "@/app/_services/feed_service";
import FeedSkeleton from "./FeedSkeleton";

export default function FeedList() {
  const { data, isLoading } = useCustomQuery(QUERY_KEYS.FEED.LIST.queryKey, FeedService.getFeedsList);

  return (
    <>
      {isLoading && <FeedSkeleton />}
      <Container>{data && !isLoading && data.map((feed: FeedProps) => <Feed key={feed.feedId} {...feed} />)}</Container>
    </>
  );
}

import React from "react";
import { Skeleton } from "./FeedSkeleton.style";
import { Header } from "../../molecules/feed/feedHeader/FeedHeader.style";

export default function FeedSkeleton() {
  const skeletonFeeds = Array.from({ length: 2 }).map((_, idx) => (
    <Skeleton.Feed key={idx}>
      <Skeleton.Header>
        <Skeleton.Avatar size={32} />
        <Header.Box>
          <Skeleton.Username />
        </Header.Box>
      </Skeleton.Header>
      <Skeleton.ContentBox />
      <Skeleton.InfoBox />
    </Skeleton.Feed>
  ));
  return <Skeleton.Container>{skeletonFeeds}</Skeleton.Container>;
}

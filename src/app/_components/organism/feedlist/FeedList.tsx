import React from "react";
import { FEEDS } from "@/app/_dummyData/feedDummy";
import { Container } from "./FeedList.style";
import Feed from "../../molecules/feed/Feed";

export default function FeedList() {
  return (
    <Container>
      {FEEDS.map((feed) => (
        <Feed key={feed.feedId} {...feed} />
      ))}
    </Container>
  );
}

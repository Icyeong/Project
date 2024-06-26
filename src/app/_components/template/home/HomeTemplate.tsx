import { HomeLayoutStyle } from "@/_styles/common.style";
import React from "react";
import StoryBar from "@components/organism/storyBar/StoryBar";
import FeedList from "@components/organism/feedlist/FeedList";

export default function HomeTemplate() {
  return (
    <HomeLayoutStyle.Container>
      <HomeLayoutStyle.Main>
        <StoryBar />
        <FeedList />
      </HomeLayoutStyle.Main>
      <HomeLayoutStyle.SideSection>side</HomeLayoutStyle.SideSection>
    </HomeLayoutStyle.Container>
  );
}

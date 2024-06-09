import { HomeLayoutStyle } from "@/app/_styles/common.style";
import React from "react";
import StoryBar from "../organism/storyBar/StoryBar";
import FeedList from "../organism/feedlist/FeedList";

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

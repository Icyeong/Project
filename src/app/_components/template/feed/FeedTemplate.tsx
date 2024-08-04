"use client";
import FeedDetailBox from "@/_components/organism/feedDetailBox/FeedDetailBox";
import { HomeLayoutStyle } from "@/_styles/common.style";

export default function FeedTemplate() {
  return (
    <HomeLayoutStyle.Container>
      <HomeLayoutStyle.Main>
        <FeedDetailBox />
      </HomeLayoutStyle.Main>
    </HomeLayoutStyle.Container>
  );
}

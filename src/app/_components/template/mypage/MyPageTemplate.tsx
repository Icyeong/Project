"use client";
import MyInfoBox from "@/_components/organism/myInfoBox/MyInfoBox";
import PhotoList from "@/_components/organism/photolist/PhotoList";
import { HomeLayoutStyle } from "@/_styles/common.style";

export default function MypageTemplate() {
  return (
    <HomeLayoutStyle.Container>
      <HomeLayoutStyle.Main>
        <MyInfoBox />
        <PhotoList />
      </HomeLayoutStyle.Main>
    </HomeLayoutStyle.Container>
  );
}

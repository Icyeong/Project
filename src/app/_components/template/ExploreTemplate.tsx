import React from "react";
import PhotoList from "../organism/photolist/PhotoList";
import { HomeLayoutStyle } from "@/app/_styles/common.style";

export default function ExploreTemplate() {
  return (
    <HomeLayoutStyle.Container>
      <HomeLayoutStyle.Main>
        <PhotoList />;
      </HomeLayoutStyle.Main>
    </HomeLayoutStyle.Container>
  );
}

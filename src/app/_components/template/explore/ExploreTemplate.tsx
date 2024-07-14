import React from "react";
import { HomeLayoutStyle } from "@/_styles/common.style";
import { Template } from "./Template.style";
import PhotoList from "@components/organism/photolist/PhotoList";

export default function ExploreTemplate() {
  return (
    <HomeLayoutStyle.Container>
      <Template.Main>
        <PhotoList />
      </Template.Main>
    </HomeLayoutStyle.Container>
  );
}

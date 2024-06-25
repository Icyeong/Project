import React from "react";
import { HomeLayoutStyle } from "@/app/_styles/common.style";
import { Template } from "./Template.style";
import PhotoList from "../../organism/photolist/PhotoList";

export default function ExploreTemplate() {
  return (
    <HomeLayoutStyle.Container>
      <Template.Main>
        <PhotoList />;
      </Template.Main>
    </HomeLayoutStyle.Container>
  );
}

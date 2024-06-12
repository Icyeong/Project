import React from "react";
import { List } from "./PhotoList.style";
import PhotoSet from "../../molecules/photoSet/PhotoSet";

export default function PhotoList() {
  return (
    <List.Container>
      <PhotoSet />
      <PhotoSet />
      <PhotoSet />
      <PhotoSet />
      <PhotoSet />
    </List.Container>
  );
}

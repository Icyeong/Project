import React from "react";
import { Skeleton } from "./PhotoListSkeleton.style";

export default function PhotoListSkeleton() {
  const skeletonPhotoList = Array.from({ length: 4 }).map((_, idx) => (
    <Skeleton.Row key={idx}>
      <Skeleton.Piece value="" img=""></Skeleton.Piece>
      <Skeleton.Piece value="" img=""></Skeleton.Piece>
      <Skeleton.Piece value="" img=""></Skeleton.Piece>
    </Skeleton.Row>
  ));
  return <Skeleton.Container>{skeletonPhotoList}</Skeleton.Container>;
}

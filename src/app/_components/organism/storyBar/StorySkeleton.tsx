import React from "react";
import { Skeleton } from "./StorySkeleton.style";
import UserSkeleton from "@components/molecules/user/UserSkeleton";

export default function StorySkeleton() {
  const skeletonUsers = Array.from({ length: 8 }).map((_, idx) => <UserSkeleton key={idx} />);
  return <Skeleton.Container>{skeletonUsers}</Skeleton.Container>;
}

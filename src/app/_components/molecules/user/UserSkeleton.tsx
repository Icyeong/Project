import React from "react";
import { Skeleton } from "./UswerSkeleton.style";

export default function UserSkeleton() {
  return (
    <Skeleton.User>
      <Skeleton.Avatar></Skeleton.Avatar>
      <Skeleton.UserName />
    </Skeleton.User>
  );
}

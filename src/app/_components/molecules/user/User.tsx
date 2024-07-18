import React from "react";
import { UserStyle } from "./User.style";
import Avatar from "@components/atoms/avatar/Avatar";

export interface UserProps {
  userId: string;
  username: string;
  img: string;
}

export default function User({ username, img }: UserProps) {
  return (
    <UserStyle.User>
      <Avatar img={img} />
      <UserStyle.UserName>{username}</UserStyle.UserName>
    </UserStyle.User>
  );
}

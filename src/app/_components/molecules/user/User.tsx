import React from "react";
import { UserStyle } from "./User.style";
import Avatar from "@components/atoms/avatar/Avatar";

export interface UserProps {
  userId: string;
  userName: string;
  userImg: string;
}

export default function User({ userName, userImg }: UserProps) {
  return (
    <UserStyle.User>
      <Avatar img={userImg} />
      <UserStyle.UserName>{userName}</UserStyle.UserName>
    </UserStyle.User>
  );
}

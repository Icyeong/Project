import React from "react";
import { UserStyle } from "./User.style";
import Avatar from "@components/atoms/avatar/Avatar";
import { UserProps } from "@/_types/user";

export default function User({ userName, userImg }: UserProps) {
  return (
    <UserStyle.User>
      <Avatar img={userImg} />
      <UserStyle.UserName>{userName}</UserStyle.UserName>
    </UserStyle.User>
  );
}

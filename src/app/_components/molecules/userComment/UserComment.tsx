import React from "react";
import { Comment } from "./UserComment.style";
import Avatar from "@/_components/atoms/avatar/Avatar";
import BaseButton from "@/_components/atoms/button/BaseButton";
import { CommentInfoProps } from "../commentInputBar/CommentInputBar";

export default function UserComment(userComment: CommentInfoProps) {
  const { userImg, userName, comment, createdAt } = userComment;
  return (
    <Comment.Container>
      <Avatar size={42} img={userImg} />
      <Comment.TextBox>
        <Comment.UserName>{userName}</Comment.UserName>
        {comment}
        <Comment.ControlBar>
          <BaseButton fontSize="12px" color="#737373" value="6주" />
          <BaseButton fontSize="12px" color="#737373" value="좋아요" />
          <BaseButton fontSize="12px" color="#737373" value="댓글 달기" />
          <BaseButton fontSize="12px" color="#737373" value="번역 보기" />
        </Comment.ControlBar>
      </Comment.TextBox>
    </Comment.Container>
  );
}

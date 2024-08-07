import { Comment } from "./UserComment.style";
import Avatar from "@/_components/atoms/avatar/Avatar";
import BaseButton from "@/_components/atoms/button/BaseButton";
import { FlexColNoAlign } from "@/_styles/common.style";
import { CommentInfoProps } from "@/_types/feed";
import dayjs from "dayjs";
import { useEffect, useRef } from "react";

export default function UserComment(userComment: CommentInfoProps) {
  const { userImg, userName, comment, createdAt, taggedUsers } = userComment;

  const textBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const users = taggedUsers.map((user) => "@" + user.userName);

    if (textBoxRef.current) {
      let html = textBoxRef.current.innerHTML;
      users.forEach((user) => {
        html = html.replace(user, `<span>${user}</span>`);
      });
      textBoxRef.current.innerHTML = html;
    }
  }, []);

  return (
    <Comment.Container>
      <Avatar size={42} img={userImg} />
      <FlexColNoAlign>
        <Comment.TextBox ref={textBoxRef}>
          <Comment.UserName>{userName}</Comment.UserName>
          {comment}
        </Comment.TextBox>
        <Comment.ControlBar>
          <BaseButton fontSize="12px" color="#737373" value={dayjs(createdAt).fromNow(true)} />
          <BaseButton fontSize="12px" color="#737373" value="좋아요" />
          <BaseButton fontSize="12px" color="#737373" value="댓글 달기" />
          <BaseButton fontSize="12px" color="#737373" value="번역 보기" />
        </Comment.ControlBar>
      </FlexColNoAlign>
    </Comment.Container>
  );
}

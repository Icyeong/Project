import { Comment } from "./UserComment.style";
import Avatar from "@/_components/atoms/avatar/Avatar";
import BaseButton from "@/_components/atoms/button/BaseButton";
import { FlexColNoAlign } from "@/_styles/common.style";
import { CommentInfoProps } from "@/_types/feed";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { CommentToProps } from "../commentInputBar/CommentInputBar";
import { isArrNotEmpty } from "@/_utils/utils";
import { BUTTON_TEXT } from "@/_constant/button";
import { ROUTE } from "@/_constant/route";

interface UserCommentProps {
  userComment: CommentInfoProps;
  commentIsOpened: Record<string, boolean>;
  setUser: (user: CommentToProps) => void;
  setCommentOpen: (openId: string) => void;
}

export default function UserComment({ userComment, commentIsOpened, setUser, setCommentOpen }: UserCommentProps) {
  const { userId, userImg, userName, commentId, comment, comments, createdAt, taggedUsers } = userComment;
  const curOpenId = commentId;

  const textBoxRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleUserClick = () => {
    console.log("hello???");
    router.push(ROUTE.USER(userName));
  };

  const handleCommentingClick = () => {
    if (setUser) {
      setUser({ userId, userName, userImg, commentId });
    }
  };

  const handleShowCommentClick = () => {
    setCommentOpen(curOpenId);
  };

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
          <Comment.UserName onClick={handleUserClick}>{userName}</Comment.UserName>
          {comment}
        </Comment.TextBox>
        <Comment.ControlBar>
          <BaseButton fontSize="12px" color="#737373" value={dayjs(createdAt).fromNow(true)} />
          <BaseButton fontSize="12px" color="#737373" value={BUTTON_TEXT.LIKE} />
          <BaseButton onClick={handleCommentingClick} fontSize="12px" color="#737373" value={BUTTON_TEXT.COMMENT} />
          <BaseButton fontSize="12px" color="#737373" value={BUTTON_TEXT.TRANSLATE} />
        </Comment.ControlBar>
        {isArrNotEmpty(comments) && (
          <>
            <BaseButton
              onClick={handleShowCommentClick}
              fontSize="12px"
              color="#737373"
              value={commentIsOpened[curOpenId] ? BUTTON_TEXT.HIDE_COMMENT : BUTTON_TEXT.SHOW_COMMENT(comments.length)}
            />
            {commentIsOpened[curOpenId] &&
              comments.map((comment, idx) => (
                <UserComment
                  key={idx}
                  userComment={comment}
                  setUser={setUser}
                  commentIsOpened={commentIsOpened}
                  setCommentOpen={setCommentOpen}
                />
              ))}
          </>
        )}
      </FlexColNoAlign>
    </Comment.Container>
  );
}

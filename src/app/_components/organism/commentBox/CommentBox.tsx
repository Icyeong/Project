import { FeedComment } from "./CommentBox.style";
import ScrollBox from "@/_components/atoms/scrollBox/ScrollBox";
import { FeedStyle } from "../../molecules/feed/Feed.style";
import ControlBar from "../../molecules/feed/feedInfo/ControlBar";
import CommentInputBar, { CommentToProps } from "../../molecules/commentInputBar/CommentInputBar";
import { FeedProps } from "@/_types/feed";
import FeedHeader from "../../molecules/feed/feedHeader/FeedHeader";
import UserComment from "@/_components/molecules/userComment/UserComment";
import dayjs from "dayjs";
import { v4 } from "uuid";
import { useState } from "react";

interface CommentBoxProps {
  feed: FeedProps;
}

export default function CommentBox({ feed }: CommentBoxProps) {
  const { feedId, userId, userImg, userName, text, likes, comments, createdAt } = feed;
  const [commentIsOpened, setCommentIsOpened] = useState<Record<string, boolean>>({});
  const headerProps = { ...feed, size: "M" };
  const myComment = {
    userImg,
    userId,
    userName,
    commentId: "",
    comment: text,
    createdAt,
    taggedUsers: [],
    comments: [],
  };
  const sortedComments = comments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const [commentTo, setCommentTo] = useState<CommentToProps | null>(null);
  const setUser = (userInfo: CommentToProps | null) => {
    setCommentTo(userInfo);
  };

  const setCommentOpen = (openId: string) => {
    setCommentIsOpened((prev) => ({ ...prev, [openId]: !prev[openId] }));
  };

  return (
    <FeedComment.Container>
      <FeedComment.Header>
        <FeedHeader {...headerProps} />
      </FeedComment.Header>
      <ScrollBox>
        <UserComment
          setUser={setUser}
          userComment={myComment}
          commentIsOpened={commentIsOpened}
          setCommentOpen={setCommentOpen}
        />
        {sortedComments.map((comment) => (
          <UserComment
            key={v4()}
            setUser={setUser}
            commentIsOpened={commentIsOpened}
            setCommentOpen={setCommentOpen}
            userComment={comment}
          />
        ))}
      </ScrollBox>
      <FeedComment.InfoBox>
        <ControlBar />
        {likes > 0 && <FeedStyle.Likes>좋아요 {likes}개</FeedStyle.Likes>}
        <FeedComment.Time>{dayjs(createdAt).fromNow()}</FeedComment.Time>
      </FeedComment.InfoBox>
      <CommentInputBar feedId={feedId} ver={2} commentTo={commentTo} setUser={setUser} />
    </FeedComment.Container>
  );
}

import { FeedComment } from "./CommentBox.style";
import ScrollBox from "@/_components/atoms/scrollBox/ScrollBox";
import { FeedStyle } from "../../molecules/feed/Feed.style";
import ControlBar from "../../molecules/feed/feedInfo/ControlBar";
import CommentInputBar from "../../molecules/commentInputBar/CommentInputBar";
import { FeedProps } from "@/_types/feed";
import FeedHeader from "../../molecules/feed/feedHeader/FeedHeader";
import UserComment from "@/_components/molecules/userComment/UserComment";
import dayjs from "dayjs";

interface CommentBoxProps {
  feed: FeedProps;
}

export default function CommentBox({ feed }: CommentBoxProps) {
  const { feedId, userId, userImg, userName, text, likes, comments, createdAt } = feed;
  const headerProps = { ...feed, size: "M" };
  const myComment = { userImg, userId, userName, comment: text, createdAt, taggedUsers: [] };
  const sortedComments = comments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return (
    <FeedComment.Container>
      <FeedComment.Header>
        <FeedHeader {...headerProps} />
      </FeedComment.Header>
      <ScrollBox>
        <UserComment {...myComment} />
        {sortedComments.map((comment) => (
          <UserComment key={comment.createdAt} {...comment} />
        ))}
      </ScrollBox>
      <FeedComment.InfoBox>
        <ControlBar />
        {likes > 0 && <FeedStyle.Likes>좋아요 {likes}개</FeedStyle.Likes>}
        <FeedComment.Time>{dayjs(createdAt).fromNow()}</FeedComment.Time>
      </FeedComment.InfoBox>
      <CommentInputBar feedId={feedId} ver={2} />
    </FeedComment.Container>
  );
}

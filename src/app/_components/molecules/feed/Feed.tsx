import React from "react";
import { FeedStyle } from "./Feed.style";
import FeedHeader from "./feedHeader/FeedHeader";
import Image from "next/image";
import ControlBar from "./feedInfo/ControlBar";
import TextBox from "./feedInfo/TextBox";
import CommentInputBar from "../commentInputBar/CommentInputBar";
import BaseButton from "../../atoms/button/BaseButton";

interface FeedProps {
  feedId: number;
  username: string;
  createdAt: string;
  following: boolean;
  content: string;
  text: string;
  likes: number;
}

export default function Feed({ feedId, username, createdAt, following, content, text, likes }: FeedProps) {
  return (
    <FeedStyle.Container>
      <FeedHeader username={username} createdAt={createdAt} following={following} />
      <FeedStyle.ContentBox>
        <Image src={content} width={470} height={580} alt="content" priority />
      </FeedStyle.ContentBox>
      <FeedStyle.InfoBox>
        <ControlBar />
        {likes > 0 && <FeedStyle.Likes>좋아요 {likes}개</FeedStyle.Likes>}
        <TextBox username={username} text={text} />
        <BaseButton fontSize="14px" fontWeight={500} color="#737373" value={`댓글 모두 보기`} />
        <CommentInputBar />
      </FeedStyle.InfoBox>
    </FeedStyle.Container>
  );
}

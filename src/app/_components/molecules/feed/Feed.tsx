import React, { useEffect, useRef } from "react";
import { FeedStyle } from "./Feed.style";
import FeedHeader from "./feedHeader/FeedHeader";
import Image from "next/image";
import ControlBar from "./feedInfo/ControlBar";
import TextBox from "./feedInfo/TextBox";
import CommentInputBar from "@components/molecules/commentInputBar/CommentInputBar";
import BaseButton from "@components/atoms/button/BaseButton";

export interface FeedProps {
  feedId: string;
  username: string;
  img: string;
  createdAt: string;
  following: boolean;
  content: string;
  text: string;
  likes: number;
  onSizeChange?: (size: number) => void;
}

export default function Feed({ onSizeChange, ...feed }: FeedProps) {
  const { username, content, text, likes } = feed;
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (feedRef.current) {
      const resizeObsever = new ResizeObserver((entries) => {
        onSizeChange?.(entries[0].contentRect.height);
      });
      resizeObsever.observe(feedRef.current);
    }
  }, [onSizeChange]);
  return (
    <FeedStyle.Container ref={feedRef}>
      <FeedHeader {...feed} />
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

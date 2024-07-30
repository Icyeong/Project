import { useEffect, useRef } from "react";
import { FeedStyle } from "./Feed.style";
import FeedHeader from "./feedHeader/FeedHeader";
import Image from "next/image";
import ControlBar from "./feedInfo/ControlBar";
import TextBox from "./feedInfo/TextBox";
import CommentInputBar from "@components/molecules/commentInputBar/CommentInputBar";
import BaseButton from "@components/atoms/button/BaseButton";
import { isArrNotEmpty, isTxtNotEmpty } from "@/_utils/utils";
import { FeedProps } from "@/_types/feed";
import useModalStore from "@/_stores/client/modalStore";
import { MODAL } from "@/_constant/modal";

export default function Feed({ onSizeChange, ...feed }: FeedProps) {
  const { setModal, openModal } = useModalStore();
  const { feedId, userName, content, text, likes, comments } = feed;
  const feedRef = useRef<HTMLDivElement>(null);

  const handleShowFeed = () => {
    window.history.pushState({}, "", `/p/${feedId}`);
    setModal(MODAL.FEED);
    openModal();
  };

  useEffect(() => {
    if (feedRef.current) {
      const resizeObsever = new ResizeObserver((entries) => {
        onSizeChange?.(entries[0].contentRect.height);
      });
      resizeObsever.observe(feedRef.current);
    }
  }, []);
  return (
    <FeedStyle.Container ref={feedRef}>
      <FeedHeader {...feed} />
      <FeedStyle.ContentBox>
        <Image src={content} width={470} height={580} alt="content" priority />
      </FeedStyle.ContentBox>
      <FeedStyle.InfoBox>
        <ControlBar />
        {likes > 0 && <FeedStyle.Likes>좋아요 {likes}개</FeedStyle.Likes>}
        {isTxtNotEmpty(text) && <TextBox username={userName} text={text} />}
        {isArrNotEmpty(comments) && (
          <BaseButton
            onClick={handleShowFeed}
            fontSize="14px"
            fontWeight={500}
            color="#737373"
            value={`댓글 ${comments.length}개 모두 보기`}
          />
        )}
        <CommentInputBar feedId={feedId} />
      </FeedStyle.InfoBox>
    </FeedStyle.Container>
  );
}

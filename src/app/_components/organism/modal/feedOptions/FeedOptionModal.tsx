import { ModalStyle } from "@components/atoms/modal/Modal.style";
import React, { useEffect } from "react";
import { Options } from "./FeedOptionModal.style";
import useAuthStore from "@/_stores/client/authStore";
import useModalStore from "@/_stores/client/modalStore";
import useFeedStore from "@/_stores/client/feedStore";
import { FeedService } from "@/_services/feed_service";
import { useCustomMutation } from "@/_hooks/useFetch";
import { queryClient } from "@/(pages)/App";

export default function FeedOptionModal() {
  const { userName } = useAuthStore();
  const { selectedFeed } = useFeedStore();
  const { closeModal } = useModalStore();

  const { mutate: mutateDeleteFeed } = useCustomMutation(FeedService.deleteFeed, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      closeModal();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
  });

  const deleteFeedClick = () => {
    if (selectedFeed) {
      mutateDeleteFeed(selectedFeed.feedId);
    }
  };

  useEffect(() => {
    console.log("selectedFeed: ", selectedFeed);
  }, [selectedFeed]);
  return (
    <ModalStyle.Body>
      {selectedFeed?.username === userName ? (
        <>
          <Options.Button onClick={deleteFeedClick}>삭제</Options.Button>
          <Options.Button>수정</Options.Button>
          <Options.Button>다른 사람에게 좋아요 수 숨기기 취소</Options.Button>
          <Options.Button>댓글 기능 해제</Options.Button>
          <Options.Button>게시물로 이동</Options.Button>
          <Options.Button>공유 대상...</Options.Button>
          <Options.Button>링크 복사</Options.Button>
          <Options.Button>퍼가기</Options.Button>
        </>
      ) : (
        <>
          <Options.Button>신고</Options.Button>
          <Options.Button>팔로우 취소</Options.Button>
          <Options.Button>즐겨찾기에 추가</Options.Button>
          <Options.Button>게시물로 이동</Options.Button>
          <Options.Button>공유 대상...</Options.Button>
          <Options.Button>링크 복사</Options.Button>
          <Options.Button>퍼가기</Options.Button>
          <Options.Button>이 계정 정보</Options.Button>
        </>
      )}
      <Options.Button onClick={closeModal}>취소</Options.Button>
    </ModalStyle.Body>
  );
}

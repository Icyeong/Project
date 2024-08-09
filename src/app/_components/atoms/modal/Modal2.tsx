"use client";
import React, { ReactNode } from "react";
import { ModalStyle } from "./Modal.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import useModalStore from "@/_stores/client/modalStore";
import { createPortal } from "react-dom";
import { MODAL } from "@/_constant/modal";
import TestModal from "@components/molecules/ModalContent/TestModal";
import PostFeedModal from "@components/organism/modal/postFeed/PostFeedModal";
import FeedOptionModal from "@components/organism/modal/feedOptions/FeedOptionModal";
import EditFeedModal from "@components/organism/modal/editFeed/EditFeedModal";
import FeedModal from "@components/organism/modal/feed/FeedModal";
import { useRouter } from "next/navigation";

interface ModalProps {
  children?: ReactNode;
}

export function getModal(modalName: string) {
  switch (modalName) {
    case MODAL.POST_FEED:
      return <PostFeedModal />;
    case MODAL.EDIT_FEED:
      return <EditFeedModal />;
    case MODAL.FEED:
      return <FeedModal />;
    case MODAL.FEED_OPTION:
      return <FeedOptionModal />;
    case MODAL.TEST:
      return <TestModal />;
    default:
      return null;
  }
}

export default function Modal2({ children }: ModalProps) {
  const { modalName, isOpen, closeModal } = useModalStore();
  const router = useRouter();

  const handleCloseCLick = (e: any) => {
    e.stopPropagation();

    switch (modalName) {
      case MODAL.FEED:
        return handleHistoryBack();
      default:
        return closeModal();
    }
  };
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const handleHistoryBack = () => {
    closeModal();
    router.back();
  };

  const modal2 = document.getElementById("modal-2");

  if (modal2)
    return createPortal(
      <ModalStyle.Bg className={classNames({ isOpen: isOpen })} role="button" onClick={handleCloseCLick}>
        <ModalStyle.Card role="button" onClick={handleCardClick}>
          <ModalStyle.CloseBtn role="button" onClick={handleCloseCLick}>
            <FontAwesomeIcon icon={faClose} />
          </ModalStyle.CloseBtn>
        </ModalStyle.Card>
      </ModalStyle.Bg>,
      modal2,
    );
}

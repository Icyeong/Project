"use client";
import React, { ReactNode } from "react";
import { ModalStyle } from "./Modal.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import useModalStore from "@/_stores/client/modalStore";
import { createPortal } from "react-dom";
import { MODAL_NAME } from "@/_constant/modal";
import UploadModal from "@components/molecules/ModalContent/uploadModal/UploadModal";
import EditImageModal from "@components/molecules/ModalContent/editImageModal/EditImageModal";
import EditPostModal from "@components/molecules/ModalContent/editPostModal/EditPostModal";
import TestModal from "@components/molecules/ModalContent/TestModal";

interface ModalProps {
  children?: ReactNode;
}

export function getModal(modalName: string) {
  switch (modalName) {
    case MODAL_NAME.POST_FEED:
      return <UploadModal />;
    case MODAL_NAME.EDIT_IMAGE:
      return <EditImageModal />;
    case MODAL_NAME.WRITE_POST:
      return <EditPostModal />;
    case MODAL_NAME.TEST:
      return <TestModal />;
    default:
      return null;
  }
}

export default function Modal({ children }: ModalProps) {
  const { isOpen, closeModal } = useModalStore();
  const handleCloseCLick = (e: any) => {
    e.stopPropagation();
    closeModal();
  };
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const modalRoot = document.getElementById("modal-root");

  if (modalRoot)
    return createPortal(
      <ModalStyle.Bg className={classNames({ isOpen: isOpen })} role="button" onClick={handleCloseCLick}>
        <ModalStyle.Card role="button" onClick={handleCardClick}>
          <ModalStyle.CloseBtn role="button" onClick={handleCloseCLick}>
            <FontAwesomeIcon icon={faClose} />
          </ModalStyle.CloseBtn>
          {children}
        </ModalStyle.Card>
      </ModalStyle.Bg>,
      modalRoot,
    );
}

"use client";
import React from "react";
import { ModalStyle } from "./Modal.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import useModalStore from "@/app/_stores/client/modalStore";

interface ModalProps {
  isActive: boolean;
}

export default function Modal({ isActive }: ModalProps) {
  const { setIsActive } = useModalStore();
  const handleCloseCLick = (e: any) => {
    e.stopPropagation();
    setIsActive(false);
  };
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <ModalStyle.Bg className={classNames({ isActive: isActive })} role="button" onClick={handleCloseCLick}>
      <ModalStyle.Card role="button" onClick={handleCardClick}>
        <ModalStyle.CloseBtn role="button" onClick={handleCloseCLick}>
          <FontAwesomeIcon icon={faClose} />
        </ModalStyle.CloseBtn>
        <ModalStyle.Header>새 게시물 만들기</ModalStyle.Header>
        <ModalStyle.Body>사진과 동영상을 여기에 끌어다 놓으세요</ModalStyle.Body>
      </ModalStyle.Card>
    </ModalStyle.Bg>
  );
}

"use client";
import React, { ReactNode } from "react";
import { ModalStyle } from "./Modal.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import useModalStore from "@/app/_stores/client/modalStore";

interface ModalProps {
  isActive: boolean;
  children?: ReactNode;
}

export default function Modal({ isActive, children }: ModalProps) {
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
        {children}
      </ModalStyle.Card>
    </ModalStyle.Bg>
  );
}

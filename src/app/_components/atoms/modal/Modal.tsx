"use client";
import React from "react";
import { ModalStyle } from "./Modal.style";

export default function Modal() {
  return (
    <ModalStyle.Bg>
      <ModalStyle.Card>
        <ModalStyle.Header>새 게시물 만들기</ModalStyle.Header>
        <ModalStyle.Body>사진과 동영상을 여기에 끌어다 놓으세요</ModalStyle.Body>
      </ModalStyle.Card>
    </ModalStyle.Bg>
  );
}

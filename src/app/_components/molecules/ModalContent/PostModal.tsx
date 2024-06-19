import React from "react";
import { ModalStyle } from "../../atoms/modal/Modal.style";

export default function PostModal() {
  return (
    <>
      <ModalStyle.Header>새 게시물 만들기</ModalStyle.Header>
      <ModalStyle.Body>
        <input type="file" />
        <button>첨부하기</button>
        사진과 동영상을 여기에 끌어다 놓으세요
      </ModalStyle.Body>
    </>
  );
}

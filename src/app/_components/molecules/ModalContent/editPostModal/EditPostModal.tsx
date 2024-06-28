import { ModalStyle } from "@components/atoms/modal/Modal.style";
import React, { ChangeEvent, useState } from "react";
import { Content } from "./EditPostModal.style";
import BaseButton from "@components/atoms/button/BaseButton";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useModalStore from "@/_stores/client/modalStore";
import Image from "next/image";
import IconButton from "@components/atoms/button/IconButton";
import { MODAL_NAME } from "@/_constant/modal";
import WritingBox from "../../writingBox/WritingBox";

export default function EditPostModal() {
  const { selectedImage, setModal } = useModalStore();
  const [text, setText] = useState("");
  const [textSize, setTextSize] = useState(0);
  const handleBackClick = () => {
    setModal(MODAL_NAME.EDIT_IMAGE);
  };
  const handleNextClick = () => {
    // 피드 공유하기 로직 추가
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (textSize > 1199) return;
    setText(e.target.value);
    setTextSize(e.target.value.length);
  };
  return (
    <>
      <ModalStyle.Header>
        <Content.Header>
          <IconButton awesomeIcon={faArrowLeft} color="gray" onClick={handleBackClick} />
          새 게시물 만들기
          <BaseButton value="공유하기" color="#0095F6" onClick={handleNextClick} />
        </Content.Header>
      </ModalStyle.Header>
      <ModalStyle.Body>
        <Content.Flex>
          <Content.ImgBox>
            {selectedImage && <Image src={selectedImage} width={300} height={400} alt="preview" />}
          </Content.ImgBox>
          <WritingBox text={text} textSize={textSize} onChange={handleTextChange}>
            hello~
          </WritingBox>
        </Content.Flex>
      </ModalStyle.Body>
    </>
  );
}
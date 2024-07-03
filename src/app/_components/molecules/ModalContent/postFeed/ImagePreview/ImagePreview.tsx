import { ModalStyle } from "@components/atoms/modal/Modal.style";
import React from "react";
import { Content } from "./ImagePreview.style";
import BaseButton from "@components/atoms/button/BaseButton";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useModalStore from "@/_stores/client/modalStore";
import Image from "next/image";
import IconButton from "@components/atoms/button/IconButton";
import { MODAL } from "@/_constant/modal";

export default function ImagePreview() {
  const { selectedImage, setModalStep } = useModalStore();
  const handleNextClick = () => {
    setModalStep(MODAL.POST_FEED.STEP.WRITE_CONTENT);
  };
  const handleBackClick = () => {
    const res = confirm("게시물을 삭제하시겠어요?").valueOf();
    if (res) {
      setModalStep(MODAL.POST_FEED.STEP.UPLOAD_IMAGE);
    }
  };

  return (
    <>
      <ModalStyle.Header>
        <Content.Header>
          <IconButton awesomeIcon={faArrowLeft} color="gray" onClick={handleBackClick} />
          미리보기
          <BaseButton value="다음" color="#0095F6" onClick={handleNextClick} />
        </Content.Header>
      </ModalStyle.Header>
      <ModalStyle.Body>
        <Content.Flex>
          <Content.ImgBox>
            {selectedImage && <Image src={selectedImage} width={300} height={400} alt="preview" />}
          </Content.ImgBox>
        </Content.Flex>
      </ModalStyle.Body>
    </>
  );
}

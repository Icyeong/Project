import React, { ChangeEvent, useRef } from "react";
import { ModalStyle } from "@components/atoms/modal/Modal.style";
import { Content } from "./UploadModal.style";
import BaseButton from "@components/atoms/button/BaseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import useModalStore from "@/_stores/client/modalStore";
import { MODAL_NAME } from "@/_constant/modal";

export default function UploadModal() {
  const { setSelectedImage, setModal } = useModalStore();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleSelectClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setModal(MODAL_NAME.EDIT_IMAGE);
      };
      reader.readAsDataURL(file);
      console.log("file : ", file.name);
    }
  };
  return (
    <>
      <ModalStyle.Header>새 게시물 만들기</ModalStyle.Header>
      <ModalStyle.Body>
        <Content.Container>
          <Content.ImgBox>
            <FontAwesomeIcon icon={faPlusSquare} />
          </Content.ImgBox>
          <Content.Text>사진과 동영상을 여기에 끌어다 놓으세요</Content.Text>
          <Content.Input ref={fileInputRef} type="file" onChange={handleFileChange} />
          <BaseButton
            type="submit"
            color="white"
            bgColor="#0095F6"
            radius={8}
            value="컴퓨터에서 선택"
            onClick={handleSelectClick}
          />
        </Content.Container>
      </ModalStyle.Body>
    </>
  );
}

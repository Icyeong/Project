import React, { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import { ModalStyle } from "@/_components/atoms/modal/Modal.style";
import { Upload } from "./UploadModal.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import useModalStore from "@/_stores/client/modalStore";
import BaseButton from "@components/atoms/button/BaseButton";
import { POST_MODAL } from "@/_constant/modal";

interface UploadModalProps {
  setStep: Dispatch<SetStateAction<string>>;
}

export default function UploadModal({ setStep }: UploadModalProps) {
  const { setSelectedImage } = useModalStore();
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
        setStep(POST_MODAL.PREVIEW);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <ModalStyle.Header>새 게시물 만들기</ModalStyle.Header>
      <ModalStyle.Body>
        <Upload.Container>
          <Upload.ImgBox>
            <FontAwesomeIcon icon={faPlusSquare} />
          </Upload.ImgBox>
          <Upload.Text>사진과 동영상을 여기에 끌어다 놓으세요</Upload.Text>
          <Upload.Input ref={fileInputRef} type="file" onChange={handleFileChange} />
          <BaseButton
            type="submit"
            color="white"
            $bgColor="#0095F6"
            radius={8}
            value="컴퓨터에서 선택"
            onClick={handleSelectClick}
          />
        </Upload.Container>
      </ModalStyle.Body>
    </>
  );
}

import { ModalStyle } from "@components/atoms/modal/Modal.style";
import { Preview } from "./EditImageModal.style";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@components/atoms/button/IconButton";
import useModalStore from "@/_stores/client/modalStore";
import Image from "next/image";
import BaseButton from "@components/atoms/button/BaseButton";
import { POST_MODAL, PostModalType } from "@/_constant/modal";

interface EditImageProps {
  setStep: (step: PostModalType) => void;
}

export default function EditImageModal({ setStep }: EditImageProps) {
  const { selectedImage } = useModalStore();

  const handleBackClick = () => {
    const res = confirm("게시물을 삭제하시겠어요?").valueOf();
    if (res) {
      setStep(POST_MODAL.UPLOAD);
    }
  };
  const handleNextClick = () => {
    setStep(POST_MODAL.WRITE);
  };
  return (
    <>
      <ModalStyle.Header>
        <Preview.Header>
          <IconButton awesomeIcon={faArrowLeft} color="gray" onClick={handleBackClick} />
          미리보기
          <BaseButton value="다음" color="#0095F6" onClick={handleNextClick} />
        </Preview.Header>
      </ModalStyle.Header>
      <ModalStyle.Body>
        <Preview.Flex>
          <Preview.ImgBox>
            {selectedImage && <Image src={selectedImage} width={300} height={400} alt="preview" />}
          </Preview.ImgBox>
        </Preview.Flex>
      </ModalStyle.Body>
    </>
  );
}

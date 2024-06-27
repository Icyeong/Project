import { MODAL_NAME } from "@/_constant/modal";
import PostModal from "@components/molecules/ModalContent/postModal/PostModal";
import EditImageModal from "@components/molecules/ModalContent/editModal/EditImageModal";
import TestModal from "@components/molecules/ModalContent/TestModal";

export function getRandomBoolean() {
  return Boolean(Math.round(Math.random() * 1));
}

export function getRandomNumber(max: number) {
  return Math.round(Math.random() * max);
}

export function getModal(modalName: string) {
  switch (modalName) {
    case MODAL_NAME.POST_FEED:
      return <PostModal />;
    case MODAL_NAME.EDIT_IMAGE:
      return <EditImageModal />;
    case MODAL_NAME.WRITE_POST:
      return <EditImageModal />;
    case MODAL_NAME.TEST:
      return <TestModal />;
    default:
      return null;
  }
}

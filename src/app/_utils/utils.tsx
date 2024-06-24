import { MODAL_NAME } from "../_constant/modal";
import PostModal from "../_components/molecules/ModalContent/postModal/PostModal";
import EditImageModal from "../_components/molecules/ModalContent/editModal/EditImageModal";
import TestModal from "../_components/molecules/ModalContent/TestModal";

export function getRandomBoolean() {
  return Boolean(Math.round(Math.random() * 1));
}

export function getRandomNumber(max: number) {
  return Math.round(Math.random() * max);
}

export function getModal(modalName: string) {
  if (modalName === MODAL_NAME.POST_FEED) return <PostModal />;
  if (modalName === MODAL_NAME.EDIT_IMAGE) return <EditImageModal />;
  if (modalName === MODAL_NAME.TEST) return <TestModal />;
  return null;
}

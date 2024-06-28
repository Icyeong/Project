import { MODAL_NAME } from "@/_constant/modal";
import UploadModal from "@components/molecules/ModalContent/uploadModal/UploadModal";
import EditImageModal from "@/_components/molecules/ModalContent/editImageModal/EditImageModal";
import EditPostModal from "@components/molecules/ModalContent/editPostModal/EditPostModal";
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
      return <UploadModal />;
    case MODAL_NAME.EDIT_IMAGE:
      return <EditImageModal />;
    case MODAL_NAME.WRITE_POST:
      return <EditPostModal />;
    case MODAL_NAME.TEST:
      return <TestModal />;
    default:
      return null;
  }
}

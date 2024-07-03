import ImagePreview from "@/_components/molecules/ModalContent/postFeed/ImagePreview/ImagePreview";
import UploadImage from "@/_components/molecules/ModalContent/postFeed/uploadImage/UploadImage";
import WriteContent from "@/_components/molecules/ModalContent/postFeed/writeContent/WriteContent";
import { MODAL } from "@/_constant/modal";
import useModalStore from "@/_stores/client/modalStore";
import React from "react";

export default function PostFeedModal() {
  const { modalStep } = useModalStore();
  return (
    <>
      {modalStep === MODAL.POST_FEED.STEP.UPLOAD_IMAGE && <UploadImage />}
      {modalStep === MODAL.POST_FEED.STEP.IMAGE_PREVIEW && <ImagePreview />}
      {modalStep === MODAL.POST_FEED.STEP.WRITE_CONTENT && <WriteContent />}
    </>
  );
}

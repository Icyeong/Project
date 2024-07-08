import React, { useState } from "react";

import UploadModal from "@components/molecules/ModalContent/uploadModal/UploadModal";
import EditImageModal from "@components/molecules/ModalContent/editImageModal/EditImageModal";
import EditPostModal from "@components/molecules/ModalContent/editPostModal/EditPostModal";
import { POST_MODAL } from "@/_constant/modal";

export default function PostFeedModal() {
  const [step, setStep] = useState(POST_MODAL.UPLOAD);

  return (
    <>
      {step === POST_MODAL.UPLOAD && <UploadModal setStep={setStep} />}
      {step === POST_MODAL.PREVIEW && <EditImageModal setStep={setStep} />}
      {step === POST_MODAL.WRITE && <EditPostModal setStep={setStep} />}
    </>
  );
}

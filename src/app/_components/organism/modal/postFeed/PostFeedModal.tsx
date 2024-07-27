import { useState } from "react";

import UploadModal from "@components/molecules/ModalContent/uploadModal/UploadModal";
import EditImageModal from "@components/molecules/ModalContent/editImageModal/EditImageModal";
import EditPostModal from "@components/molecules/ModalContent/editPostModal/EditPostModal";
import { POST_MODAL, PostModalType } from "@/_constant/modal";

export default function PostFeedModal() {
  const [step, setStep] = useState<PostModalType>(POST_MODAL.UPLOAD);

  const handleSetStepClick = (step: PostModalType) => {
    setStep(step);
  };

  return (
    <>
      {step === POST_MODAL.UPLOAD && <UploadModal setStep={handleSetStepClick} />}
      {step === POST_MODAL.PREVIEW && <EditImageModal setStep={handleSetStepClick} />}
      {step === POST_MODAL.WRITE && <EditPostModal setStep={handleSetStepClick} />}
    </>
  );
}

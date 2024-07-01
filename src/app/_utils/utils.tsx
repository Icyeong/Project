import { MODAL_NAME } from "@/_constant/modal";
import UploadModal from "@components/molecules/ModalContent/uploadModal/UploadModal";
import EditImageModal from "@/_components/molecules/ModalContent/editImageModal/EditImageModal";
import EditPostModal from "@components/molecules/ModalContent/editPostModal/EditPostModal";
import TestModal from "@components/molecules/ModalContent/TestModal";
import { getCookie } from "cookies-next";

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

export function getFetchOptions(method: string, token: boolean, body: any) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json;charset=UTF-8",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${getCookie("accessToken")}`;
  }

  const options: RequestInit = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return options;
}

export function getErrorHandler(error: unknown) {
  if (error instanceof Error) {
    return console.error(error.message);
  } else {
    return console.error("unexpected error");
  }
}

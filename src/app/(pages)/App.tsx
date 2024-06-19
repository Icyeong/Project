"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StyledComponentsRegistry from "../_styles/registry";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Modal from "../_components/atoms/modal/Modal";
import useModalStore from "../_stores/client/modalStore";
import TestModal from "../_components/molecules/ModalContent/TestModal";
import PostModal from "../_components/molecules/ModalContent/postModal/PostModal";
import { MODAL_NAME } from "../_constant/modal";
import EditImageModal from "../_components/molecules/ModalContent/editModal/EditImageModal";

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const { isActive, modalName } = useModalStore();

  const getModal = () => {
    if (modalName === MODAL_NAME.POST_FEED) return <PostModal />;
    if (modalName === MODAL_NAME.EDIT_IMAGE) return <EditImageModal />;
    if (modalName === MODAL_NAME.TEST) return <TestModal />;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        {children}
        <Modal isActive={isActive}>{getModal()}</Modal>
        <ReactQueryDevtools initialIsOpen={false} />
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
}

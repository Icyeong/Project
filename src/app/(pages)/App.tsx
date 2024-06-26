"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StyledComponentsRegistry from "@/_styles/registry";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Modal from "@components/atoms/modal/Modal";
import useModalStore from "@/_stores/client/modalStore";
import { getModal } from "@/_utils/utils";

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const { isOpen, modalName } = useModalStore();

  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        {children}
        {isOpen && <Modal>{getModal(modalName)}</Modal>}
        <ReactQueryDevtools initialIsOpen={false} />
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
}

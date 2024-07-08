"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Modal, { getModal } from "@components/atoms/modal/Modal";
import useModalStore from "@/_stores/client/modalStore";
import { useEffect, useState } from "react";

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const { isOpen, modalName } = useModalStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {isOpen && <Modal>{getModal(modalName)}</Modal>}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

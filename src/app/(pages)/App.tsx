"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StyledComponentsRegistry from "../_styles/registry";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Modal from "../_components/atoms/modal/Modal";
import useModalStore from "../_stores/client/modalStore";

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  const { isActive } = useModalStore();
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        {children}
        <Modal isActive={isActive} />
        <ReactQueryDevtools initialIsOpen={false} />
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
}

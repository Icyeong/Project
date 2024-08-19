"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Modal from "@components/atoms/modal/Modal";
import useModalStore from "@/_stores/client/modalStore";
import { useEffect, useState } from "react";
import useGlobalStore from "@/_stores/client/globalStore";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from "@/_styles/color";

export const queryClient = new QueryClient();
export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen } = useModalStore();
  const { isLightMode } = useGlobalStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
        <GlobalStyle />
        {children}
        {isOpen && <Modal />}
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

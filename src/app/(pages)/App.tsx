"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StyledComponentsRegistry from "../_styles/registry";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
}

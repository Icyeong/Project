import React from "react";
import { InputLabel } from "./Label.style";

export default function Label(
  { label }: { label: string | undefined },
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>,
) {
  return (
    <InputLabel>
      <span>{label}</span>
      {children}
    </InputLabel>
  );
}

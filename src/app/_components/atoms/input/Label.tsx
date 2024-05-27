import React from "react";
import { Input_Label } from "./Label.style";

export default function Label(
  { label }: { label: string | undefined },
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>,
) {
  return (
    <Input_Label>
      <span>{label}</span>
      {children}
    </Input_Label>
  );
}

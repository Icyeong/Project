import { ReactNode } from "react";
import { Box } from "./ScrollBox.style";

interface ScrollBoxProps {
  children: ReactNode;
}

export default function ScrollBox({ children }: ScrollBoxProps) {
  return <Box.Container>{children}</Box.Container>;
}

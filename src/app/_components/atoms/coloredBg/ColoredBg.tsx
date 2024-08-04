import { ReactNode } from "react";
import { Bg } from "./ColoredBg.style";

interface ColoredBgProps {
  bgColor?: string;
  children: ReactNode;
}

export default function ColoredBg({ bgColor, children }: ColoredBgProps) {
  return <Bg $bgColor={bgColor}>{children}</Bg>;
}

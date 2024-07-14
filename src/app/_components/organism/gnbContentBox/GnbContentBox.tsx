import { ReactNode } from "react";
import { GnbBox } from "./GnbContentBox.style";
import classNames from "classnames";

interface GnbContentBoxProps {
  children: ReactNode;
  isActive: boolean;
}

export default function GnbContentBox({ children, isActive }: GnbContentBoxProps) {
  return <GnbBox.Container className={classNames({ show: isActive })}>{children}</GnbBox.Container>;
}

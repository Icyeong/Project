import { ReactNode } from "react";
import { GnbBox } from "./GnbContentBox.style";
import classNames from "classnames";
import { GNB_SHAPE } from "@/_constant/gnb";

interface GnbContentBoxProps {
  children: ReactNode;
  gnbShape: string;
}

export default function GnbContentBox({ children, gnbShape }: GnbContentBoxProps) {
  return (
    <GnbBox.Container className={classNames({ show: gnbShape === GNB_SHAPE.ICON_WITH_BOX })}>
      {children}
    </GnbBox.Container>
  );
}

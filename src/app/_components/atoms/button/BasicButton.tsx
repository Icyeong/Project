import React from "react";
import { Button } from "./BasicButton.style";

type Props = {
  value: string;
  onClick: () => void;
  isActive?: boolean;
  size: string;
  color?: string;
  fontWeight?: number;
  img?: string;
};
export default function BasicButton(props: Props) {
  return (
    <Button size={props.size} color={props.color} fontWeight={600} onClick={props.onClick}>
      {props.img && <span></span>}
      {props.value}
    </Button>
  );
}

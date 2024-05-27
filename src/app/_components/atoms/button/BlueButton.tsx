import React from "react";
import { Button } from "./BlueButton.style";

type Props = {
  value: string;
  onClick: () => void;
  isActive: boolean;
};

export default function BlueButton(props: Props) {
  return <Button className={props.isActive ? "active" : ""}>{props.value}</Button>;
}

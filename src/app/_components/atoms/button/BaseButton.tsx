import React, { HTMLAttributes } from "react";
import { Button } from "./BaseButton.style";

interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onClick"> {
  value: string;
  onClick: () => void;
  isActive?: boolean;
  fontSize?: string;
  color?: string;
  fontWeight?: number;
  img?: string;
  blueButton?: boolean;
}
export default function BaseButton({ value, fontSize, color, img, isActive, blueButton, onClick }: ButtonProps) {
  return (
    <Button
      className={blueButton ? (isActive ? "blue-button active" : "blue-button") : ""}
      fontSize={fontSize}
      color={color}
      fontWeight={600}
      onClick={onClick}
    >
      {img && <span></span>}
      {value}
    </Button>
  );
}

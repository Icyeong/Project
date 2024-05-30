import React, { AllHTMLAttributes } from "react";
import { Button } from "./BaseButton.style";
import classNames from "classnames";

interface ButtonProps extends AllHTMLAttributes<HTMLButtonElement> {
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
      className={classNames({
        "blue-button": blueButton,
        active: blueButton && isActive,
      })}
      fontSize={fontSize}
      color={color}
      fontWeight={600}
      onClick={onClick}
      disabled={!isActive}
    >
      {img && <span></span>}
      {value}
    </Button>
  );
}

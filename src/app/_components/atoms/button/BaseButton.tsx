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
export default function BaseButton({
  value,
  fontSize,
  fontWeight,
  color,
  img,
  isActive = true,
  blueButton,
  onClick,
}: ButtonProps) {
  return (
    <Button
      className={classNames({
        "blue-button": blueButton,
        active: isActive,
      })}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight || 600}
      onClick={onClick}
      disabled={!isActive}
    >
      {img && <span></span>}
      {value}
    </Button>
  );
}

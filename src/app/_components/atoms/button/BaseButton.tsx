import React, { AllHTMLAttributes } from "react";
import { Button } from "./BaseButton.style";
import classNames from "classnames";

interface ButtonProps extends AllHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  fontSize?: string;
  color?: string;
  bgColor?: string;
  fontWeight?: number;
  radius?: number;
  img?: string;
  blueButton?: boolean;
}
export default function BaseButton({
  value,
  fontSize,
  fontWeight,
  color,
  bgColor,
  radius,
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
      bgColor={bgColor}
      fontWeight={fontWeight || 600}
      radius={radius}
      onClick={onClick}
      disabled={!isActive}
    >
      {img && <span></span>}
      {value}
    </Button>
  );
}

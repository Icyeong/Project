import React, { AllHTMLAttributes } from "react";
import { Button } from "./IconButton.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface IconButtonProps extends AllHTMLAttributes<HTMLButtonElement> {
  awesomeIcon?: IconDefinition;
  img?: string;
  size?: number;
  color?: string;
}

export default function IconButton({ size, awesomeIcon, color, img, onClick }: IconButtonProps) {
  return (
    <Button size={size} onClick={onClick}>
      {awesomeIcon && <FontAwesomeIcon icon={awesomeIcon} style={{ color }} />}
      {img && <Image src={img} width={24} height={24} alt="icon" />}
    </Button>
  );
}

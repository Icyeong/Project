import React from "react";
import { AvatarStyle } from "./Avatar.style";
import Image from "next/image";

interface AvatarProps {
  size?: number;
  img: string;
}

export default function Avatar({ size, img }: AvatarProps) {
  return (
    <AvatarStyle.Container size={size}>
      <Image src={img} width={size || 56} height={size || 56} alt="avatar" />
    </AvatarStyle.Container>
  );
}

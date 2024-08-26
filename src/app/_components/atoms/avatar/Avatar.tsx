import React, { useState } from "react";
import { AvatarStyle } from "./Avatar.style";
import Image from "next/image";
import unknown from "@/../../public/unknown.png";

const useImageLoader = (src: string, fallbackSrc: string) => {
  const [imageSrc, setImageSrc] = useState<string>(src);

  return {
    src: imageSrc,
    onError: () => setImageSrc(fallbackSrc),
  };
};

interface AvatarProps {
  size?: number;
  img: string;
}

export default function Avatar({ size, img }: AvatarProps) {
  const { src, onError } = useImageLoader(img, "/unknown.png");
  return (
    <AvatarStyle.Container size={size}>
      <Image src={src} width={size || 56} height={size || 56} onError={onError} alt="avatar" />
    </AvatarStyle.Container>
  );
}

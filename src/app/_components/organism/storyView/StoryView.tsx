import React, { useMemo } from "react";
import { View } from "./StoryView.style";
import Image from "next/image";
import { faker } from "@faker-js/faker";

export default function StoryView() {
  const randomImg = useMemo(() => faker.image.urlLoremFlickr({ width: 400, height: 700, category: "house" }), []);
  return (
    <View.Container>
      <Image src={randomImg} width={400} height={700} alt="스토리" />
    </View.Container>
  );
}

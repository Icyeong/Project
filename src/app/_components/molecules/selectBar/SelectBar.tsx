import React from "react";
import { Select } from "./SelectBar.style";
import BaseButton from "@/_components/atoms/button/BaseButton";

export default function SelectBar() {
  return (
    <Select.Container>
      <BaseButton value="게시물" fontWeight={999} />
      <BaseButton value="릴스" />
      <BaseButton value="태그됨" />
    </Select.Container>
  );
}

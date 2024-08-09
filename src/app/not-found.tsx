"use client";
import { NotFoundStyle } from "@/_styles/common.style";
import BaseButton from "@components/atoms/button/BaseButton";
import { useRouter } from "next/navigation";
import { ROUTE } from "./_constant/route";
import { BUTTON_TEXT } from "./_constant/button";

export default function NotFound() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push(ROUTE.HOME);
  };
  return (
    <NotFoundStyle>
      요청하신 페이지는 찾을 수 없습니다.
      <BaseButton name={BUTTON_TEXT.HOME} value={BUTTON_TEXT.HOME} blueButton={true} onClick={handleHomeClick} />
    </NotFoundStyle>
  );
}

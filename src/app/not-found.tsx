"use client";

import { NotFoundStyle } from "./_styles/common.style";
import BaseButton from "./_components/atoms/button/BaseButton";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };
  return (
    <NotFoundStyle>
      요청하신 페이지는 찾을 수 없습니다.
      <BaseButton name="홈으로" value={"홈으로"} blueButton={true} onClick={handleHomeClick} />
    </NotFoundStyle>
  );
}

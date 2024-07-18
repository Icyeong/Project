import React from "react";
import { LoginWrapper } from "./LoginCard.style";
import Logo from "@components/atoms/common/Logo";
import LoginForm from "@components/organism/form/LoginForm";
import Link from "next/link";
import { CardWarpper } from "@/_styles/cardWrapper.style";
import BaseButton from "@components/atoms/button/BaseButton";
import useLogin from "@/_hooks/useLogin";
import { GNB_SHAPE } from "@/_constant/gnb";

export default function LoginCard() {
  const { googleLogin } = useLogin();

  const handleGoogleLogin = () => {
    googleLogin.mutate(null);
  };

  return (
    <LoginWrapper>
      <CardWarpper>
        <Logo gnbShape={GNB_SHAPE.ALL} />
        <LoginForm />
        <div className="divider">
          <span></span>
          또는
          <span></span>
        </div>
        <BaseButton value="Google으로 로그인" fontSize="14px" color="#385185" onClick={handleGoogleLogin} />
        <Link href={"#"}>비밀번호를 잊으셨나요?</Link>
      </CardWarpper>
      <CardWarpper className="btn-newAcount">
        <Link href={"/signup"}>새 계정 만들기</Link>
      </CardWarpper>
    </LoginWrapper>
  );
}

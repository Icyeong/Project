import React from "react";
import { LoginWrapper } from "./LoginCard.style";
import Logo from "../../atoms/common/Logo";
import LoginForm from "../form/LoginForm";
import Link from "next/link";
import { CardWarpper } from "@/app/_styles/cardWrapper.style";
import BaseButton from "../../atoms/button/BaseButton";
import useLogin from "@/app/_hooks/useLogin";

export default function LoginCard() {
  const { googleLogin } = useLogin();

  const test = () => {};
  const handleGoogleLogin = () => {
    googleLogin.mutate();
  };

  return (
    <LoginWrapper>
      <CardWarpper>
        <Logo />
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
        <BaseButton value="새 계정 만들기" fontSize="14px" color="#0095f6" onClick={test} />
      </CardWarpper>
    </LoginWrapper>
  );
}

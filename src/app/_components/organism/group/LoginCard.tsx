import React from "react";
import { LoginWrapper } from "./LoginCard.style";
import Logo from "../../atoms/common/Logo";
import LoginForm from "../form/LoginForm";
import BasicButton from "../../atoms/button/BasicButton";
import Link from "next/link";
import { CardWarpper } from "@/app/_styles/cardWrapper.style";

export default function LoginCard() {
  const test = () => {};
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
        <BasicButton value="Google으로 로그인" size="14px" color="#385185" onClick={test} />
        <Link href={"/"}>비밀번호를 잊으셨나요?</Link>
      </CardWarpper>
      <CardWarpper className="btn-newAcount">
        <BasicButton value="Google으로 로그인" size="14px" color="#0095f6" onClick={test} />
      </CardWarpper>
    </LoginWrapper>
  );
}

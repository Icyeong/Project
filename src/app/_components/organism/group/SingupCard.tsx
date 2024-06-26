import React from "react";
import Logo from "@components/atoms/common/Logo";
import Link from "next/link";
import { CardWarpper } from "@/_styles/cardWrapper.style";
import BaseButton from "@components/atoms/button/BaseButton";
import useLogin from "@/_hooks/useLogin";
import { SignupPrompt, SignupWrapper } from "./SignupCard.style";
import SignupForm from "@components/organism/form/SignupForm";

export default function SignupCard() {
  const { googleLogin } = useLogin();

  const handleGoogleLogin = () => {
    googleLogin.mutate(null);
  };

  return (
    <SignupWrapper>
      <CardWarpper>
        <Logo />
        <SignupPrompt>친구들의 사진과 동영상을 보려면 가입하세요.</SignupPrompt>
        <BaseButton
          value="Google으로 로그인"
          fontSize="14px"
          color="#385185"
          onClick={handleGoogleLogin}
          blueButton={true}
        />
        <div className="divider">
          <span></span>
          또는
          <span></span>
        </div>
        <SignupForm />
      </CardWarpper>
      <CardWarpper className="btn-signup">
        계정이 있으신가요?
        <Link href={"/login"}>로그인</Link>
      </CardWarpper>
    </SignupWrapper>
  );
}

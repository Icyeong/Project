import React from "react";
import { LoginWrapper } from "./LoginCard.style";
import Logo from "../../atoms/common/Logo";
import LoginForm from "../form/LoginForm";
import Link from "next/link";
import { CardWarpper } from "@/app/_styles/cardWrapper.style";
import BaseButton from "../../atoms/button/BaseButton";
import { signInWithGoogle } from "@/app/_firebase/firebaseAuth";
import useAuthStore from "@/app/_stores/client/authStore";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function LoginCard() {
  const { setAuthState } = useAuthStore();

  const router = useRouter();

  const test = () => {};
  const handleGoogleLogin = async () => {
    try {
      const { user } = await signInWithGoogle();
      console.log("Google login successful:", user);
      const access_token = await user.getIdToken();
      setCookie("access_token", access_token);
      setAuthState(true);
      router.push("/");
    } catch (error) {
      console.error("Google login failed:", error);
      // 로그인 실패시 에러 처리하기
    }
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

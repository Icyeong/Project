import React, { ChangeEvent, useEffect, useState } from "react";
import { Form } from "./LoginForm.style";
import LabeledInput from "../../molecules/Input/LabeledInput";
import { INPUT_TEXT } from "@/app/_constant/input";
import BaseButton from "../../atoms/button/BaseButton";
import useAuthStore from "@/app/_stores/client/authStore";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { signInWithEmailPassword } from "@/app/_firebase/firebaseAuth";
const { EMAIL, PASSWORD } = INPUT_TEXT;

export default function LoginForm() {
  const { setAuthState } = useAuthStore();
  const [isActive, setIsActive] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handLoginFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value.trim();

    if (name === "email") {
      setLoginForm({ ...loginForm, email: value });
    } else if (name === "password") {
      setLoginForm({ ...loginForm, password: value });
    }
  };

  const handleLoginClick = async () => {
    try {
      const { user } = await signInWithEmailPassword(loginForm);
      console.log("login successful:", user);
      const access_token = await user.getIdToken();
      setCookie("access_token", access_token);
      setAuthState(true);
      router.push("/");
    } catch (error) {
      console.error("login failed:", error);
      // 로그인 실패시 에러 처리하기
    }
  };

  useEffect(() => {
    setIsActive(!!(loginForm.email && loginForm.password));
  }, [loginForm]);

  return (
    <Form>
      <LabeledInput label={EMAIL} type="text" value={loginForm.email} name="email" onChange={handLoginFormChange} />
      <LabeledInput
        label={PASSWORD}
        type="password"
        value={loginForm.password}
        name="password"
        onChange={handLoginFormChange}
      />
      <BaseButton
        value="로그인"
        onClick={handleLoginClick}
        isActive={isActive}
        blueButton={true}
        disabled={!isActive}
      />
    </Form>
  );
}

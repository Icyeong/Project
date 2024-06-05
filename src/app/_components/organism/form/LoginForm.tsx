import React, { ChangeEvent, useEffect, useState } from "react";
import { Form } from "./LoginForm.style";
import LabeledInput from "../../molecules/Input/LabeledInput";
import { INPUT_TEXT } from "@/app/_constant/input";
import BaseButton from "../../atoms/button/BaseButton";
import { useRouter } from "next/navigation";
import useLogin from "@/app/_hooks/useLogin";
const { EMAIL, PASSWORD } = INPUT_TEXT;

export default function LoginForm() {
  const { emailPasswordLogin } = useLogin();
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
    }
    if (name === "password") {
      setLoginForm({ ...loginForm, password: value });
    }
  };

  const handleLoginClick = async () => {
    emailPasswordLogin.mutate(loginForm);
  };

  useEffect(() => {
    setIsActive(!!(loginForm.email && loginForm.password));
  }, [loginForm]);

  useEffect(() => {
    if (emailPasswordLogin.isSuccess) {
      router.push("/");
    }
  }, [emailPasswordLogin.isSuccess]);

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

import React, { ChangeEvent, useEffect, useState } from "react";
import LabeledInput from "@components/molecules/Input/LabeledInput";
import { INPUT_TEXT } from "@/_constant/input";
import BaseButton from "@components/atoms/button/BaseButton";
import useLogin from "@/_hooks/useLogin";
import { Form } from "@/_styles/common.style";
const { EMAIL, PASSWORD } = INPUT_TEXT;

export default function LoginForm() {
  const { emailPasswordLogin } = useLogin();
  const [isActive, setIsActive] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

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
        color="white !important"
        onClick={handleLoginClick}
        isActive={isActive}
        blueButton={true}
        disabled={!isActive}
      />
    </Form>
  );
}

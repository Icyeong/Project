import React, { ChangeEvent, useEffect, useState } from "react";
import { Form } from "./LoginForm.style";
import LabeledInput from "../../molecules/Input/LabeledInput";
import { INPUT_TEXT } from "@/app/_constant/input";
import BaseButton from "../../atoms/button/BaseButton";
const { USERID, PASSWORD } = INPUT_TEXT;

export default function LoginForm() {
  const [isActive, setIsActive] = useState(false);
  const [loginForm, setLoginForm] = useState({
    userId: "",
    password: "",
  });

  const handLoginFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value.trim();

    if (name === "userId") {
      setLoginForm({ ...loginForm, userId: value });
    } else if (name === "password") {
      setLoginForm({ ...loginForm, password: value });
    }
  };

  const handleLoginClick = () => {
    alert("로그인");
  };

  useEffect(() => {
    if (loginForm.userId && loginForm.password) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [loginForm]);

  return (
    <Form>
      <LabeledInput label={USERID} type="text" value={loginForm.userId} name="userId" onChange={handLoginFormChange} />
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

import React, { ChangeEvent, useEffect, useState } from "react";
import { Form } from "./LoginForm.style";
import LabeledInput from "../../molecules/Input/LabeledInput";
import { INPUT_TEXT } from "@/app/_constant/input";
import BaseButton from "../../atoms/button/BaseButton";
import { AuthService } from "@/app/_services/auth_service";
import useAuthStore from "@/app/_stores/client/authStore";
import { useRouter } from "next/navigation";
const { USERID, PASSWORD } = INPUT_TEXT;

export default function LoginForm() {
  const { access_token, setAuthTokens } = useAuthStore();
  const [isActive, setIsActive] = useState(false);
  const [loginForm, setLoginForm] = useState({
    userId: "",
    password: "",
  });
  const { data, isLoading, error, refetch } = AuthService.useLogin(loginForm);

  const router = useRouter();

  const handLoginFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value.trim();

    if (name === "userId") {
      setLoginForm({ ...loginForm, userId: value });
    } else if (name === "password") {
      setLoginForm({ ...loginForm, password: value });
    }
  };

  const handleLoginClick = async () => {
    refetch();
  };

  useEffect(() => {
    setIsActive(!!(loginForm.userId && loginForm.password));
  }, [loginForm]);

  useEffect(() => {
    if (data) {
      setAuthTokens(data.data);
    }

    if (access_token) {
      router.push("/");
    }
  }, [data, access_token]);

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

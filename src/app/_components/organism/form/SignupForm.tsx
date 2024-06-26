import React, { ChangeEvent, useEffect, useState } from "react";
import LabeledInput from "@components/molecules/Input/LabeledInput";
import { INPUT_TEXT } from "@/_constant/input";
import BaseButton from "@components/atoms/button/BaseButton";
import { Notice } from "./SignupForm.style";
import { AuthService } from "@/_services/auth_service";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import useAuthStore from "@/_stores/client/authStore";
import { authErrorHandler } from "@/_utils/authErrorHandler";
import { Form } from "@/_styles/common.style";
import { useCustomMutation } from "@/_hooks/useFetch";
import { User } from "firebase/auth";
const { EMAIL, NAME, USERNAME, PASSWORD } = INPUT_TEXT;

export default function SignupForm() {
  const { setAuthState } = useAuthStore();
  const { signupWithEmail } = AuthService;
  const [isActive, setIsActive] = useState(false);
  const [signupForm, setSignupForm] = useState({
    email: "",
    // name: "",
    // userName: "",
    password: "",
  });

  const router = useRouter();

  const handleSignupFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value.trim();

    if (name === "email") {
      setSignupForm({ ...signupForm, email: value });
    }
    // if (name === "name") {
    //   setSignupForm({ ...signupForm, name: value });
    // }
    // if (name === "userName") {
    //   setSignupForm({ ...signupForm, userName: value });
    // }
    if (name === "password") {
      setSignupForm({ ...signupForm, password: value });
    }
  };

  const { mutate: signupMutation } = useCustomMutation<
    { token: string; user: User },
    Error,
    { email: string; password: string },
    undefined
  >(async (variables) => AuthService.signupWithEmail(variables), {
    onSuccess: async ({ token, user }) => {
      setCookie("accessToken", token);
      setAuthState(true);
      router.push("/");
    },
    onError: (error) => {
      const { message } = authErrorHandler(error);
      alert(message);
    },
  });

  const handleSignupClick = () => {
    signupMutation(signupForm);
  };

  useEffect(() => {
    setIsActive(!!(signupForm.email && signupForm.password));
    // setIsActive(!!(signupForm.email && signupForm.password && signupForm.name && signupForm.userName));
  }, [signupForm]);

  return (
    <Form>
      <LabeledInput label={EMAIL} type="text" value={signupForm.email} name="email" onChange={handleSignupFormChange} />
      {/* <LabeledInput label={NAME} type="text" value={signupForm.name} name="name" onChange={handleSignupFormChange} />
      <LabeledInput
        label={USERNAME}
        type="text"
        value={signupForm.userName}
        name="userName"
        onChange={handleSignupFormChange}
      /> */}
      <LabeledInput
        label={PASSWORD}
        type="password"
        value={signupForm.password}
        name="password"
        onChange={handleSignupFormChange}
      />
      <Notice>
        저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다.
        <a>더 알아보기</a>
      </Notice>
      <BaseButton value="가입" onClick={handleSignupClick} isActive={isActive} blueButton={true} disabled={!isActive} />
    </Form>
  );
}

import React, { useState } from "react";
import { Form } from "./LoginForm.style";
import LabeledInput from "../../molecules/Input/LabeledInput";
import Button from "../../atoms/button/BlueButton";
import { INPUT_TEXT } from "@/app/_constant/input";
const { LOGINID, PASSWORD } = INPUT_TEXT;

export default function LoginForm() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleTextChange = (value: string | number) => {
    setText(value as string);
  };

  const handlePasswordChange = (value: string | number) => {
    setPassword(value as string);
  };

  const handleLoginClick = () => {
    alert("로그인");
  };

  return (
    <Form>
      <LabeledInput label={LOGINID} type="text" value={text} onChange={handleTextChange} />
      <LabeledInput label={PASSWORD} type="password" value={password} onChange={handlePasswordChange} />
      <Button value="로그인" onClick={handleLoginClick} isActive={isActive} />
      {/* <LabeledInput
        type="text"
        value={text}
        inputProps={{ type: "text", value: text, onChange: handleTextChange }}
        label="전화번호, 사용자 이름 또는 이메일"
      /> */}
    </Form>
  );
}

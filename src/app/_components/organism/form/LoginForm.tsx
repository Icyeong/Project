import React, { useState } from "react";
import { Form } from "./LoginForm.style";
import Labeled_Input from "../../molecules/Input/Labeled_Input";
import Button from "../../atoms/button/BlueButton";

export default function LoginForm() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const buttonHandler = () => {
    alert("로그인");
  };

  return (
    <Form>
      <Labeled_Input label="전화번호, 사용자 이름 또는 이메일" type="text" value={text} onChange={setText} />
      <Labeled_Input label="비밀번호" type="password" value={password} onChange={setPassword} />
      <Button value="로그인" onClick={buttonHandler} isActive={isActive} />
    </Form>
  );
}

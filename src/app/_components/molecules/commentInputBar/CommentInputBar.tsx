import React, { useState } from "react";
import { Input } from "./commentInputBar.style";
import TextArea from "../../atoms/textarea/TextArea";
import BaseButton from "../../atoms/button/BaseButton";

export default function CommentInputBar() {
  const [text, setText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <Input.Container>
      <TextArea value={text} onChange={handleInputChange} placeholder="댓글 달기..." />
      {text.trim() !== "" && <BaseButton fontSize="14" color="#0095f6" value="게시" />}
    </Input.Container>
  );
}
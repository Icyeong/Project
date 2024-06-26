import React, { AllHTMLAttributes, useEffect, useRef } from "react";
import { Textarea } from "./TextArea.style";

interface TextAreaPorps extends AllHTMLAttributes<HTMLTextAreaElement> {
  maxHeight?: number;
}

export default function TextArea({ maxHeight, placeholder, value, onChange, ...props }: TextAreaPorps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const resizeTextArea = () => {
      if (textAreaRef.current) {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      }
    };
    resizeTextArea();
  }, [value]);

  return (
    <Textarea
      maxHeight={maxHeight}
      ref={textAreaRef}
      rows={1}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
}

import React, { ChangeEvent } from "react";
import { Basic_Input } from "./Input.style";

type Props = {
  type: string;
  value?: string | number;
  placeholder?: string;
  rabel?: string;
  onChange?: (value: any) => void;
  onClick?: () => void;
};

export default function Input(
  props: Props,
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>,
) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e.target.value);
    }
  };
  return (
    <Basic_Input
      className={props.value ? "typing" : ""}
      type={props.type}
      placeholder={props.placeholder}
      onChange={handleChange}
      value={props.value}
    >
      {children}
    </Basic_Input>
  );
}

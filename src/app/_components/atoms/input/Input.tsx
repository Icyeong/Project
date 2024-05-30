import React, { AllHTMLAttributes } from "react";
import { BasicInput } from "./Input.style";
import classNames from "classnames";

export interface InputProps extends AllHTMLAttributes<HTMLInputElement> {}

export default function Input({ type, value, name, placeholder, onChange }: InputProps) {
  return (
    <BasicInput
      className={classNames({ typing: value })}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
}

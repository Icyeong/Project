import React, { ChangeEvent, HTMLAttributes } from "react";
import { BasicInput } from "./Input.style";

export interface InputProps<T> extends Omit<HTMLAttributes<HTMLInputElement>, "onChange"> {
  type: string;
  value: string | number;
  placeholder?: string;
  onChange: (value: string | number) => void;
}

export default function Input<T>({ type, value, placeholder, onChange }: InputProps<T>) {
  return (
    <BasicInput
      className={value ? "typing" : ""}
      type={type}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      value={value}
    />
  );
}

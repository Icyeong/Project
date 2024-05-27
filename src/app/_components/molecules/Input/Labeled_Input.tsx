import React from "react";
import { InputWrapper } from "./Labeled_Input.style";
import Input from "../../atoms/input/Input";
import { Input_Label } from "../../atoms/input/Label.style";
import InputButton from "../../atoms/button/InputButton";
type Props = {
  type: string;
  value?: string | number;
  placeholder?: string;
  label?: string;
  onChange?: (value: any) => void;
  onClick?: () => void;
  button?: {
    text: string;
    toggled_text: string;
    onClick: () => void;
  };
};

export default function Labeled_Input(props: Props) {
  return (
    <InputWrapper className={props.value ? "typing" : ""}>
      <Input_Label>
        <span>{props.label}</span>
        <Input {...props} />
      </Input_Label>
      {props.button && <InputButton {...props.button} />}
    </InputWrapper>
  );
}

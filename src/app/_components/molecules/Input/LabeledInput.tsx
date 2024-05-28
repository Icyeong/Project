import React from "react";
import { InputWrapper } from "./LabeledInput.style";
import Input from "../../atoms/input/Input";
import { InputLabel } from "../../atoms/input/Label.style";
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

export default function LabeledInput(props: Props) {
  return (
    <InputWrapper className={props.value ? "typing" : ""}>
      <InputLabel>
        <span>{props.label}</span>
        <Input {...props} />
      </InputLabel>
    </InputWrapper>
  );
}

import React, { AllHTMLAttributes } from "react";
import { Container } from "./LabeledInput.style";
import Input from "@components/atoms/input/Input";
import { InputLabel } from "@components/atoms/label/Label.style";
import classNames from "classnames";

interface LabeledInputProps extends AllHTMLAttributes<HTMLInputElement> {}

export default function LabeledInput({ label, ...props }: LabeledInputProps) {
  return (
    <Container className={classNames({ typing: props.value })}>
      <InputLabel>
        <span>{label}</span>
        <Input {...props} />
      </InputLabel>
    </Container>
  );
}

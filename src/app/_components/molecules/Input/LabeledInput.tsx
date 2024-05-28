import React from "react";
import { Container } from "./LabeledInput.style";
import Input, { InputProps } from "../../atoms/input/Input";
import { InputLabel } from "../../atoms/label/Label.style";

interface LabeledInputProps<T> extends Pick<InputProps<T>, "type" | "value" | "onChange"> {
  label: string;
}

export default function LabeledInput<T>({ label, ...props }: LabeledInputProps<T>) {
  return (
    <Container className={props.value ? "typing" : ""}>
      <InputLabel>
        <span>{label}</span>
        <Input {...props} />
      </InputLabel>
    </Container>
  );
}

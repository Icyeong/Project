import { AllHTMLAttributes, forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { Textarea } from "./TextArea.style";

interface TextAreaProps extends AllHTMLAttributes<HTMLTextAreaElement> {
  $maxHeight?: number;
}

export interface FocusHandle {
  focus: () => void;
}

export const TextArea = forwardRef<FocusHandle, TextAreaProps>((props, ref) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus: () => textAreaRef.current?.focus(),
      };
    },
    [],
  );

  useEffect(() => {
    const resizeTextArea = () => {
      if (textAreaRef.current) {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      }
    };
    resizeTextArea();
  }, [props.value]);

  return <Textarea ref={textAreaRef} rows={1} {...props} />;
});
TextArea.displayName = "TextArea";

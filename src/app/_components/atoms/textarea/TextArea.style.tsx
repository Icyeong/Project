import styled from "styled-components";

export const Textarea = styled.textarea<{ maxHeight?: number }>`
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 80)}px;
  height: auto;
  font-size: 14px;
  line-height: 18px;
  border: none;
  background: white;
  display: flex;
  flex: 1;
  resize: none;
  &:focus {
    outline: none;
  }
`;

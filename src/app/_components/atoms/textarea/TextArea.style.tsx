import styled from "styled-components";

export const Textarea = styled.textarea`
  max-height: 80px;
  height: auto;
  font-size: 14px;
  line-height: 16px;
  border: none;
  background: white;
  display: flex;
  flex: 1;
  resize: none;
  &:focus {
    outline: none;
  }
`;

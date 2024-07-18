import styled from "styled-components";
import { BasicInput } from "../input/Input.style";

export const Input = styled(BasicInput)`
  background-color: #eeeeee;
  border: none;
  max-width: none;
  border-radius: 8px;

  &:focus {
    border: none;
  }
`;

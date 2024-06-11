import styled from "styled-components";

interface ButtonStyleProps {
  size?: number;
}

export const Button = styled.button<ButtonStyleProps>`
  width: ${({ size }) => (size ? size : 40)}px;
  height: ${({ size }) => (size ? size : 40)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
    &:hover {
      opacity: 0.7;
    }
  }
`;

import styled from "styled-components";

interface ButtonProps {
  size: string;
  color: string | undefined;
  fontWeight: number;
}

export const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color || "black"};
  cursor: pointer;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.fontWeight};
  border: none;
  background: none;
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
`;

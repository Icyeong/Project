import styled from "styled-components";

interface ButtonProps {
  fontSize?: string;
  color?: string;
  bgColor?: string;
  fontWeight?: number;
  radius?: number;
}

export const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color || "black"};
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || 500};
  border: none;
  border-radius: ${({ radius }) => radius + "px" || 0};
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 5px 10px;
  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
  &.active {
    cursor: pointer;
  }
  &.blue-button {
    border-radius: 8px;
    width: 100%;
    max-width: 270px;
    color: white;
    font-weight: 600;
    background-color: rgba(var(--light-blue-background));
    opacity: 0.7;
    font-size: 14px;
    padding: 7px 16px;
    &.active {
      opacity: 1;
      &:hover {
        background-color: var(--blue-background);
      }
    }
  }
`;

import styled from "styled-components";

export const Button = styled.button`
  border: none;
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
      cursor: pointer;
    }
  }
`;

import styled from "styled-components";

export const Basic_Input = styled.input`
  &.typing {
    padding: 14px 8px 2px 8px;
    font-size: var(--system-12-font-size);
  }
  width: 100%;
  max-width: 270px;
  min-height: 38px;
  padding: 9px 8px 7px 8px;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: var(--system-16-font-size);
  border: 1px solid var(--border-light-gray);
  border-radius: 2px;
  background: rgb(var(--light-gray-background));

  &:focus {
    border: 1px solid #a8a8a8;
  }
`;

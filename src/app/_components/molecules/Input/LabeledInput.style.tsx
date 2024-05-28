import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 270px;
  min-height: 38px;
  border-radius: 2px;
  background: rgb(var(--light-gray-background));
  position: relative;
  display: flex;
  align-items: center;

  &.typing span {
    font-size: var(--system-12-font-size);
    padding: 6px 8px 7px 8px;
    transform: scale(0.8);
  }
  input {
    background: transparent !important;
  }

  label ~ button {
    color: red !important;
  }
`;

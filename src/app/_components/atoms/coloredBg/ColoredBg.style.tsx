import styled from "styled-components";

export const Bg = styled.div<{ $bgColor?: string }>`
  background-color: ${({ $bgColor }) => $bgColor || "white"};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

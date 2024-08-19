import styled, { keyframes } from "styled-components";

export const PageWrapper = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export const FlexCol = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  width: 260px;
  input {
    margin-bottom: 6px;
  }
  button {
    margin: 10px 0;
  }
`;

export const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

export const SkeletonAni = keyframes`
 0% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

export const NotFoundStyle = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  button {
    margin-top: 20px;
  }
`;

export const HomeLayoutStyle = {
  Layout: styled.div`
    display: flex;
  `,
  Container: styled.div`
    width: calc(100% - 224px);
    margin-left: 224px;
    display: flex;
    justify-content: center;
    padding-top: 20px;
  `,
  Main: styled.main<{ $width?: number }>`
    width: ${({ $width }) => $width + "px" || "auto"};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  `,
  SideSection: styled.section`
    display: flex;
    flex-direction: column;
    width: 380px;
    padding-left: 64px;
  `,
};

export const Flex = styled.div`
  display: flex;
`;

export const FlexColNoAlign = styled.div`
  display: flex;
  flex-direction: column;
`;

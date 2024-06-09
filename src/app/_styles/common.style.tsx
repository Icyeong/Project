import styled from "styled-components";

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

export const NotFoundStyle = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  button {
    margin-top: 20px;
  }
`;

export const HomeLayoutStyle = {
  Layout: styled.div`
    display: flex;
    justify-content: end;
  `,
  Container: styled.div`
    width: calc(100% - 224px);
    display: flex;
    justify-content: center;
    padding-top: 20px;
  `,
  Main: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 630px;
    max-width: 630px;
  `,
  SideSection: styled.section`
    display: flex;
    flex-direction: column;
    min-width: 380px;
    max-width: 380px;
    padding-left: 64px;
  `,
};

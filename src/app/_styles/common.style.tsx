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

import styled from "styled-components";

export const Box = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 16px;
    min-width: 320px;
  `,
  Header: styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 600;
    align-items: center;
  `,
  Body: styled.div``,
  Footer: styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    color: #c7c7c7c7;
  `,
};

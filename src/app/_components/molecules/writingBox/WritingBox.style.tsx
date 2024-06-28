import styled from "styled-components";

export const Box = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 320px;
    > textarea {
      padding: 0 16px;
    }
  `,
  Header: styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 600;
    align-items: center;
    padding: 0 16px;
    margin: 15px 0;
    > div {
      margin-right: 13px;
    }
  `,
  Footer: styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    color: #c7c7c7c7;
    padding: 10px 16px;
    border-bottom: 1px solid rgb(219, 219, 219);
  `,
};

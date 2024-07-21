import styled from "styled-components";

export const Users = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    button:hover {
      background-color: transparent;
      cursor: auto;
    }
  `,
  MyInfo: styled.ul``,
  Title: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 16px;
    font-size: 14px;
    font-weight: 600;
    color: #737373;
  `,
  Recommends: styled.ul``,
};

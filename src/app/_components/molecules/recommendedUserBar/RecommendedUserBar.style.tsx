import styled from "styled-components";

export const Bar = {
  Wrapper: styled.li`
    position: relative;
    margin-top: 10px;
    button {
      cursor: pointer;
    }
  `,
  User: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex: 1;
    padding: 5px 16px;
  `,
  UserInfo: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    text-align: left;
    font-size: 12px;
    color: #737373;
    line-height: 16px;
    button {
      font-size: 14px;
      font-weight: 600;
      color: black;
      padding: 0;
    }
    p {
    }
  `,
};

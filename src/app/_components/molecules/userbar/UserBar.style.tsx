import styled from "styled-components";

export const Bar = {
  Wrapper: styled.li`
    position: relative;
  `,
  Button: styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    flex: 1;
    padding: 15px 10px;
    &:hover {
      background-color: #ececec;
    }
    &.focused {
      background-color: red;
    }
  `,
  CloseButton: styled.button`
    padding: 8px 10px;
    z-index: 10;
    font-size: 20px;
    color: #737373;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    &:hover {
      color: #3b3b3b;
    }
  `,
  UserInfo: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    text-align: left;
    font-size: 14px;
    color: #737373;
    line-height: 16px;
    span {
      font-weight: 600;
      color: black;
      padding: 0;
    }
    p {
    }
  `,
};

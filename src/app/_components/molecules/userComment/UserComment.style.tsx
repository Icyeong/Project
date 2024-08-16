import styled from "styled-components";

export const Comment = {
  Container: styled.li`
    display: flex;
    padding: 16px 16px 0;
  `,
  TextBox: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    span {
      color: #0095f6 !important;
      display: contents;
      cursor: pointer;
    }
  `,
  UserName: styled.button`
    font-size: 14px;
    margin: 5px 0 13px;
    display: inline-flex;
  `,
  ControlBar: styled.div`
    display: flex;
    font-size: 12px;
    color: light-gray;
  `,
};

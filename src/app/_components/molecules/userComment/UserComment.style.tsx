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
  `,
  UserName: styled.p`
    font-size: 14px;
    margin: 5px 0 13px;
  `,
  ControlBar: styled.div`
    display: flex;
    font-size: 12px;
    color: light-gray;
  `,
};

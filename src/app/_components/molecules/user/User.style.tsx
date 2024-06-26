import styled from "styled-components";

export const UserStyle = {
  User: styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 16px;
  `,
  UserName: styled.span`
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
    text-align: center;
  `,
};

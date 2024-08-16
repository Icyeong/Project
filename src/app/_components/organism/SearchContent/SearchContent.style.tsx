import { COLOR } from "@/_styles/color";
import styled from "styled-components";

export const Search = {
  Head: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 14px;
    border-bottom: 1px solid ${COLOR.common.border.light};
  `,
  Title: styled.p`
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 35px 10px;
  `,
  EmptyContent: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    span {
      font-weight: 600;
      color: black;
      display: block;
      padding: 17px 24px;
    }
    p {
      color: gray;
      font-weight: 600;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
};

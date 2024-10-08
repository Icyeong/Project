import { COLOR } from "@/_styles/color";
import styled from "styled-components";

export const Select = {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 1px solid ${COLOR.common.border.light};
    margin: 20px 0 0;
    button {
      margin: 13px 15px;
      font-size: 12px;
      color: #737373;
    }
  `,
};

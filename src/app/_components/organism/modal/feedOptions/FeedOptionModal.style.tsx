import { COLOR } from "@/_styles/color";
import styled from "styled-components";

export const Options = {
  Button: styled.button`
    width: 400px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    border-bottom: 1px solid ${COLOR.common.border.light};
    font-size: 14px;
  `,
};

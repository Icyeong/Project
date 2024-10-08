import { COLOR } from "@/_styles/color";
import styled from "styled-components";

export const Input = {
  Container: styled.div<{ $padding: string }>`
    display: flex;
    align-items: center;
    padding: ${({ $padding }) => $padding || "8px 0"};
    position: relative;
    button {
      margin-left: 10px;
    }
  `,
  PopOver: styled.ul`
    display: none;
    flex-direction: column;
    width: 325px;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transform: translateY(-100%);
    background-color: white;
    overflow-y: scroll;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    button {
      margin-left: 0;
      border-bottom: 1px solid ${COLOR.common.border.light};
      height: 50px;
    }

    &.show {
      display: flex;
    }
    &.hide {
      display: none;
    }
  `,
};

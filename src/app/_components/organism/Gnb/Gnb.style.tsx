import { COLOR } from "@/_styles/color";
import styled from "styled-components";

export const GnbStyle = {
  Wrapper: styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    min-width: 244px;
    min-height: 100vh;
    max-height: 100vh;
  `,
  NavContainer: styled.div`
    max-width: 335px;
    border-right: 1px solid ${COLOR.common.border.light};
    background-color: white;
    padding: 8px 12px 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    &.icon,
    &.iconWithBox {
      min-width: auto;
      span {
        margin-right: 0;
      }
      .navName {
        display: none;
      }
    }
  `,
  Top: styled.ul`
    display: flex;
    flex-direction: column;
    flex: 1;
  `,
  Bottom: styled.ul`
    display: flex;
    flex-direction: column;
  `,

  ContentBox: styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    flex: 1;
    background-color: gray;
  `,
};

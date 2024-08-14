import { COLOR } from "@/_styles/color";
import styled from "styled-components";

export const ModalStyle = {
  Bg: styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    display: none;
    justify-content: center;
    align-items: center;
    &.isOpen {
      display: flex;
    }
  `,
  CloseBtn: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      font-size: 25px;
      color: white;
    }
  `,
  Card: styled.div`
    min-width: 430px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
  `,
  Header: styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0;
    border-bottom: 1px solid ${COLOR.common.border.light};
  `,
  Body: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    /* padding: 20px; */
  `,
};

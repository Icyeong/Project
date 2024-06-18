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
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Card: styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    min-width: 730px;
  `,
  Header: styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0;
    border-bottom: 1px solid rgb(219, 219, 219);
  `,
  Body: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  `,
};
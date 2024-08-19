import styled from "styled-components";

export const Piece = {
  Button: styled.button<{ img: string }>`
    width: 310px;
    height: 310px;
    position: relative;
    background: url(${({ img }) => img}) no-repeat center center;
    background-size: cover;
    &:hover > div {
      display: flex;
    }
  `,

  Cover: styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3) !important;
    display: none;
    justify-content: center;
    align-items: center;
    div {
      background: transparent !important;
    }
  `,

  Count: styled.div`
    display: flex;
    color: white !important;
    font-size: 16px;
    font-weight: 600;
    padding: 0 17px;
    svg {
      margin-right: 5px;
    }
  `,
};

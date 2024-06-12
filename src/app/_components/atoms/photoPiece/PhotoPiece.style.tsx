import styled from "styled-components";

export const Piece = {
  Button: styled.button`
    width: 310px;
    height: 310px;
    position: relative;
  `,

  Cover: styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Count: styled.div`
    display: flex;
    color: white;
    font-size: 16px;
    font-weight: 600;
  `,
};

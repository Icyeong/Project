import styled from "styled-components";

export const Upload = {
  Container: styled.div`
    width: 38vw;
    height: 78vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  ImgBox: styled.div`
    width: 96px;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 70px;
    }
  `,
  Text: styled.span`
    font-size: 20px;
    margin: 10px 0 15px;
  `,
  Input: styled.input`
    display: none;
  `,
};

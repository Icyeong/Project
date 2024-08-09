import styled from "styled-components";

export const NoPost = {
  Box: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Img: styled.div`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    border: 3px solid black;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 45px 0 25px;
    svg {
      width: 24px;
      height: 24px;
    }
  `,
  P: styled.p`
    font-size: 30px;
    font-weight: 600;
  `,
};

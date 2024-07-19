import styled from "styled-components";

export const Write = {
  Header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  `,
  ImgBox: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-right: 1px solid rgb(219, 219, 219);
    overflow: hidden;
    width: 38vw;
    height: 78vh;
    img {
      width: auto;
      height: auto;
    }
  `,
  Flex: styled.div`
    display: flex;
  `,
};

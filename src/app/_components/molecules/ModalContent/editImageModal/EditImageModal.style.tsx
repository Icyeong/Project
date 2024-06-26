import styled from "styled-components";

export const Content = {
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
    max-width: 1100px;
    min-width: 35vw;
    overflow: hidden;
    img {
      width: auto;
      /* height: 100%; */
    }
  `,
  Flex: styled.div`
    display: flex;
    flex: 1;
    width: 100%;
  `,
};

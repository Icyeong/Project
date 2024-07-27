import styled from "styled-components";

export const Upload = {
  Container: styled.div`
    height: 510px;
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

export const Preview = {
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
    max-width: 1100px;
    min-width: 35vw;
    overflow: hidden;
    img {
      /* width: auto; */
      /* height: 100%; */
    }
  `,
  Flex: styled.div`
    display: flex;
    flex: 1;
    width: 100%;
  `,
};

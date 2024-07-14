import styled from "styled-components";

export const GnbBox = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    flex: 1;
    background-color: white;
    transform: translateX(-100%);
    z-index: -1;
    transition: 0.3s;
    border-top-right-radius: 17px;
    border-bottom-right-radius: 17px;
    overflow: hidden;
    &.show {
      transform: translateX(0%);
      box-shadow: 3px 0px 30px 5px rgba(0, 0, 0, 0.1);
    }
  `,
};

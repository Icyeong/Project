import styled from "styled-components";

export const GnbBox = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 100%;
    flex: 1;
    background-color: white;
    transform: translateX(0%);
    z-index: -1;
    transition: 0.3s;
    border-top-right-radius: 17px;
    border-bottom-right-radius: 17px;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    &.show {
      transform: translateX(100%);
      box-shadow: 3px 0px 30px 5px rgba(0, 0, 0, 0.1);
    }
  `,
};

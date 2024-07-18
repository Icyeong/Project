import styled from "styled-components";

export const NavStyle = {
  Li: styled.li`
    width: 100%;
    margin: 4px 0;
    background-color: white;
    &.active a {
      font-weight: 600;
    }
    a,
    button {
      display: flex;
      width: 100%;
      padding: 12px;
      font-size: 16px;
      border-radius: 5px;
      transition: 0.2s;
      &:hover {
        background-color: #f2f2f2;
      }
      &:hover span {
        transform: scale(1.1);
      }
    }
  `,
  Icon: styled.span`
    width: 22px;
    height: 22px;
    margin-right: 15px;
    transition: 0.2s;
    transform-origin: center;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
    svg {
      font-size: 22px;
    }
  `,

  Name: styled.span``,
};

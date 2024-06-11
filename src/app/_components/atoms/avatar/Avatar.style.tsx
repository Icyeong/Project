import styled from "styled-components";

interface AvatarProps {
  size?: number;
}

export const AvatarStyle = {
  Container: styled.div<AvatarProps>`
    width: ${({ size }) => size || 64}px;
    height: ${({ size }) => size || 64}px;
    border-radius: 50%;
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    &::after {
      width: ${({ size }) => (size ? size - 5 : 59)}px;
      height: ${({ size }) => (size ? size - 5 : 59)}px;
      background-color: white;
      border-radius: 50%;
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
    & img {
      width: ${({ size }) => (size ? size - 7 : 57)}px;
      height: ${({ size }) => (size ? size - 7 : 57)}px;
      border-radius: 50%;
    }
  `,
};

import styled from "styled-components";

export const Header = {
  Container: styled.div<{ $size?: number }>`
    display: flex;
    align-items: center;
    height: ${({ $size }) => $size + "px"};
    padding: 0 0 12px 4px;
  `,
  Box: styled.div`
    display: flex;
    flex: 1;
    padding-left: 10px;
    font-size: 14px;
  `,
  Username: styled.p`
    font-weight: 600;
    margin-right: 7px;
  `,
  TimeStamp: styled.span`
    color: #737373;
    margin-right: 7px;
  `,
  Follow: styled.button`
    color: #0095f6;
    font-weight: 600;
    margin-right: 7px;
  `,
  Button: styled.button`
    width: 24px;
    height: 24px;
    color: #737373;
  `,
};

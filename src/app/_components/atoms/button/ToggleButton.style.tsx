import styled from "styled-components";

export const Button = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  Input: styled.input`
    display: none;
    &:checked + label {
      font-weight: 600;
    }
  `,
  Label: styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    font-size: 16px;
    cursor: pointer;
  `,
  ContentBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: 4px 16px;
  `,
};

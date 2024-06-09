import styled from "styled-components";

export const Text = {
  Container: styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 5px;
    button.seeMore {
      color: #737373;
    }
    button.hide {
      display: none;
    }
  `,
  P: styled.p`
    flex: 1;

    &.hide {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    button {
      font-weight: 600;
      margin-right: 7px;
    }
  `,
};

import styled from "styled-components";

export const StoryStyle = {
  Container: styled.div`
    display: flex;
    width: 100%;
    max-width: 630px;
    overflow-x: scroll;
    padding: 8px 0;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

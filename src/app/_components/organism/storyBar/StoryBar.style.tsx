import styled from "styled-components";

export const StoryStyle = {
  Container: styled.div`
    display: flex;
    width: 100% !important;
    max-width: 630px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding: 8px 0;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

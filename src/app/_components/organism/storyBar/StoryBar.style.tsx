import styled from "styled-components";

export const StoryStyle = {
  Container: styled.div`
    display: flex;
    width: 100%;
    overflow-x: scroll;
    padding: 8px 0;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

import { SkeletonAni } from "@/_styles/common.style";
import styled from "styled-components";

export const StoryStyle = {
  Container: styled.div`
    display: flex;
    width: 100% !important;
    max-width: 630px;
    overflow-x: scroll;
    padding: 8px 0;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

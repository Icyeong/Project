import { SkeletonAni } from "@/app/_styles/common.style";
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

export const StorySkeleton = styled(StoryStyle.Container)`
  background-color: #cccccc;
  height: 127px;
  animation: ${SkeletonAni} infinite alternate 1s;
`;

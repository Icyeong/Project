import { COLOR } from "@/_styles/color";
import styled from "styled-components";

export const FeedComment = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
  `,
  Header: styled.div`
    padding: 0 12px;
    border-bottom: 1px solid ${COLOR.common.border.light};
    > div {
      padding: 0;
    }
  `,
  Footer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Time: styled.span`
    font-size: 12px;
    color: gray;
    margin-bottom: 10px;
  `,

  InfoBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 16px;
    border-bottom: 1px solid ${COLOR.common.border.light};
  `,
};

import styled from "styled-components";

export const FeedStyle = {
  Container: styled.li`
    display: flex;
    flex-direction: column;
    padding: 15px 0 10px;
    border-bottom: 1px solid #737373;
  `,
  ContentBox: styled.div`
    display: flex;
  `,
  InfoBox: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Likes: styled.span`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 7px;
  `,
};

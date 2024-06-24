import styled from "styled-components";
import { Container } from "./FeedList.style";
import { FeedStyle } from "../../molecules/feed/Feed.style";
import { Header } from "../../molecules/feed/feedHeader/FeedHeader.style";
import { SkeletonAni } from "@/app/_styles/common.style";
import { AvatarStyle } from "../../atoms/avatar/Avatar.style";

export const Skeleton = {
  Container: styled(Container)``,
  Feed: styled(FeedStyle.Container)``,

  Header: styled(Header.Container)`
    & img {
      animation: ${SkeletonAni} infinite alternate 1s;
      background-color: #cfcfcf;
    }
  `,
  Avatar: styled(AvatarStyle.Container)`
    animation: ${SkeletonAni} infinite alternate 1s;
    background: #cfcfcf;
    &::after {
      background: #cfcfcf;
    }
  `,
  Username: styled(Header.Username)`
    width: 150px;
    height: 15px;
    animation: ${SkeletonAni} infinite alternate 1s;
    background-color: #cfcfcf;
  `,
  ContentBox: styled(FeedStyle.ContentBox)`
    width: 100%;
    height: 580px;
    animation: ${SkeletonAni} infinite alternate 1s;
    background-color: #cfcfcf;
    img {
      background-color: red;
      height: 200px;
    }
  `,
  InfoBox: styled(FeedStyle.InfoBox)`
    margin-top: 20px;
    height: 150px;
    animation: ${SkeletonAni} infinite alternate 1s;
    background-color: #cfcfcf;
  `,
};

import styled from "styled-components";
import { UserStyle } from "./User.style";
import { AvatarStyle } from "../../atoms/avatar/Avatar.style";
import { SkeletonAni } from "@/app/_styles/common.style";

export const Skeleton = {
  User: styled(UserStyle.User)``,
  Avatar: styled(AvatarStyle.Container)`
    animation: ${SkeletonAni} infinite alternate 1s;
    background: #cfcfcf;
    &::after {
      background: #cfcfcf;
    }
  `,
  UserName: styled(UserStyle.UserName)`
    width: 100%;
    height: 10px;
    animation: ${SkeletonAni} infinite alternate 1s;
    background-color: #cfcfcf;
  `,
};

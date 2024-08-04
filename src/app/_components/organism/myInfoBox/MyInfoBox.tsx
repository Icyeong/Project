import Avatar from "@/_components/atoms/avatar/Avatar";
import { Flex } from "@/_styles/common.style";
import React from "react";
import { InfoBox } from "./MyinfoBox.style";
import useAuthStore from "@/_stores/client/authStore";
import BaseButton from "@/_components/atoms/button/BaseButton";

export default function MyInfoBox() {
  const { userInfo } = useAuthStore();
  const { userId, userImg, userName } = userInfo;
  return (
    <InfoBox.Container>
      <Flex>
        <Avatar img={userImg} size={150} />
        <InfoBox.Infos>
          <Flex>
            <BaseButton value={userName} fontWeight={500} fontSize="20px" />
            <BaseButton value="프로필 편집" $bgColor="#efefef" radius={10} fontSize="14px" />
          </Flex>
          <Flex>
            <BaseButton value="게시물 16" fontWeight={500} />
            <BaseButton value="팔로워 888" fontWeight={500} />
            <BaseButton value="팔로우 999" fontWeight={500} />
          </Flex>
          <InfoBox.Introduction>
            <span>{userName}</span>
            ㅎㅎㅎㅎ
          </InfoBox.Introduction>
        </InfoBox.Infos>
      </Flex>
    </InfoBox.Container>
  );
}

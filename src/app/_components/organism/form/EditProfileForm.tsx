import { EditForm } from "./EditProfileForm.style";
import useAuthStore from "@/_stores/client/authStore";
import BaseButton from "@/_components/atoms/button/BaseButton";
import { Bar } from "@/_components/molecules/recommendedUserBar/RecommendedUserBar.style";
import Avatar from "@/_components/atoms/avatar/Avatar";
import Input from "@/_components/atoms/input/Input";
import { TextArea } from "@/_components/atoms/textarea/TextArea";
import { useState } from "react";

export default function EditProfileForm() {
  const { userInfo } = useAuthStore();
  const { userId, userImg, userName } = userInfo;
  const [isActive, setIsActive] = useState(false);
  return (
    <EditForm.Container>
      <EditForm.Title>프로필 편집</EditForm.Title>
      <EditForm.InfoBox>
        <Bar.User>
          <Avatar size={56} img={userImg} />
          <Bar.UserInfo>
            <span>{userName}</span>
            Nickname
          </Bar.UserInfo>
          <BaseButton radius={5} $bgColor="#0095f6" color="white" fontSize="14px" value={"사진 변경"} />
        </Bar.User>
      </EditForm.InfoBox>
      <EditForm.Label>소개</EditForm.Label>
      <TextArea placeholder="소개" max={150} />
      <EditForm.Label>성별</EditForm.Label>
      <Input type="text" />
      <EditForm.Submit>
        <BaseButton value="제출" $bgColor="#0095f6" color="white" isActive={isActive} disabled={!isActive} />
      </EditForm.Submit>
    </EditForm.Container>
  );
}

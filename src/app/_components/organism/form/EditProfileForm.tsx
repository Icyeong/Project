import { EditForm } from "./EditProfileForm.style";
import useAuthStore from "@/_stores/client/authStore";
import BaseButton from "@/_components/atoms/button/BaseButton";
import { Bar } from "@/_components/molecules/recommendedUserBar/RecommendedUserBar.style";
import Avatar from "@/_components/atoms/avatar/Avatar";
import Input from "@/_components/atoms/input/Input";
import { TextArea } from "@/_components/atoms/textarea/TextArea";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useCustomMutation, useCustomQuery } from "@/_hooks/useFetch";
import { myinfoDetailProps } from "@/_dummyData/userDummy";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { UserService } from "@/_services/user_service";
import { queryClient } from "@/(pages)/App";
import { InvalidateQueryFilters } from "@tanstack/react-query";
import { USER_ALERT } from "@/_constant/alerts";
import { BUTTON_TEXT } from "@/_constant/button";

export default function EditProfileForm() {
  const { userInfo } = useAuthStore();
  const { userId, userImg, userName } = userInfo;
  const [isActive, setIsActive] = useState(true);

  const { data: infoDetail } = useCustomQuery<myinfoDetailProps, Error>(
    QUERY_KEYS.USERS.MYPAGE.queryKey,
    UserService.getMyinfo,
    { gcTime: 1000 * 60 * 60, staleTime: 1000 * 60 * 60 },
  );
  const [myInfo, setMyinfo] = useState({
    nickName: "",
    followers: 0,
    following: 0,
    userImg,
    gender: infoDetail?.gender || "female",
    introduction: infoDetail?.introduction || "",
  });

  const { mutate: mutateEditInfo } = useCustomMutation(UserService.editMyinfo, {
    onSuccess: () => {
      queryClient.invalidateQueries([...QUERY_KEYS.USERS.MYPAGE.queryKey] as InvalidateQueryFilters);
      window.alert(USER_ALERT.EDIT_MYPAGE_COMPLETED);
    },
  });

  const handleTextChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setMyinfo((prev) => ({ ...prev, introduction: e.target.value }));
    },
    [setMyinfo],
  );

  const handleSubmitClick = () => {
    mutateEditInfo(myInfo);
    // 프로필이미지, 성별 바꾸기 추가예정
  };
  useEffect(() => {
    if (infoDetail) {
      setMyinfo({ ...infoDetail, userImg });
    }
  }, [infoDetail]);

  return (
    <EditForm.Container>
      <EditForm.Title>프로필 편집</EditForm.Title>
      <EditForm.InfoBox>
        <Bar.User>
          <Avatar size={56} img={userImg} />
          <Bar.UserInfo>
            <span>{userName}</span>
            {infoDetail?.nickName}
          </Bar.UserInfo>
          <BaseButton radius={5} $bgColor="#0095f6" color="white" fontSize="14px" value={BUTTON_TEXT.CHANGE_IMG} />
        </Bar.User>
      </EditForm.InfoBox>
      <EditForm.Label>소개</EditForm.Label>
      <TextArea onChange={handleTextChange} placeholder="소개" max={150} value={myInfo.introduction} />
      <EditForm.Label>성별</EditForm.Label>
      <Input type="text" value={infoDetail?.gender === "female" ? "여자" : "남자"} />
      <EditForm.Submit>
        <BaseButton
          onClick={handleSubmitClick}
          value={BUTTON_TEXT.SUBMIT}
          $bgColor="#0095f6 !important"
          color="white !important"
          isActive={isActive}
          disabled={!isActive}
        />
      </EditForm.Submit>
    </EditForm.Container>
  );
}

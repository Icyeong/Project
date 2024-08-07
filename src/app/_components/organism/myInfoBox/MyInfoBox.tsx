import Avatar from "@/_components/atoms/avatar/Avatar";
import { Flex } from "@/_styles/common.style";
import { InfoBox } from "./MyinfoBox.style";
import useAuthStore from "@/_stores/client/authStore";
import BaseButton from "@/_components/atoms/button/BaseButton";
import { useRouter } from "next/navigation";
import { myinfoDetailProps } from "@/_dummyData/userDummy";
import { useCustomQuery } from "@/_hooks/useFetch";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { UserService } from "@/_services/user_service";
import { faker } from "@faker-js/faker";

interface MyInfoBoxProps {
  postCount: number;
}

export default function MyInfoBox({ postCount }: MyInfoBoxProps) {
  const { userInfo } = useAuthStore();
  const { userId, userImg, userName } = userInfo;

  const { data: infoDetail } = useCustomQuery<myinfoDetailProps, Error>(
    QUERY_KEYS.USERS.MYPAGE.queryKey,
    UserService.getMyinfo,
    { gcTime: 1000 * 60 * 60, staleTime: 1000 * 60 * 60 },
  );

  let curUser = window.location.pathname.split("/")[1];
  curUser = decodeURIComponent(curUser);
  const isMypage = curUser === userName;

  const router = useRouter();

  const handleEditProfile = () => {
    router.push("/accounts/edit");
  };

  return (
    <InfoBox.Container>
      <Flex>
        <Avatar img={isMypage ? userImg : faker.image.avatar()} size={150} />
        <InfoBox.Infos>
          <Flex>
            <BaseButton value={isMypage ? userName : curUser} fontWeight={500} fontSize="20px" />
            {isMypage ? (
              <BaseButton
                onClick={handleEditProfile}
                value="프로필 편집"
                $bgColor="#efefef"
                radius={10}
                fontSize="14px"
              />
            ) : (
              <>
                <BaseButton value="팔로우" $bgColor="#efefef" radius={10} fontSize="14px" />
                <BaseButton value="메시지 보내기" $bgColor="#efefef" radius={10} fontSize="14px" />
              </>
            )}
          </Flex>
          <Flex>
            <BaseButton value={`게시물 ${postCount}`} fontWeight={500} />
            <BaseButton value={`팔로워 ${infoDetail?.followers}`} fontWeight={500} />
            <BaseButton value={`팔로우 ${infoDetail?.following}`} fontWeight={500} />
          </Flex>
          <InfoBox.Introduction>
            <span>{isMypage ? infoDetail?.nickName : faker.person.fullName()}</span>
            {isMypage ? infoDetail?.introduction : faker.person.bio()}
          </InfoBox.Introduction>
        </InfoBox.Infos>
      </Flex>
    </InfoBox.Container>
  );
}
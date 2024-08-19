import Avatar from "@/_components/atoms/avatar/Avatar";
import { Flex } from "@/_styles/common.style";
import { InfoBox } from "./MyinfoBox.style";
import useAuthStore from "@/_stores/client/authStore";
import BaseButton from "@/_components/atoms/button/BaseButton";
import { usePathname, useRouter } from "next/navigation";
import { myinfoDetailProps } from "@/_dummyData/userDummy";
import { useCustomQuery } from "@/_hooks/useFetch";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { UserService } from "@/_services/user_service";
import { faker } from "@faker-js/faker";
import { ROUTE } from "@/_constant/route";
import { BUTTON_TEXT } from "@/_constant/button";

interface MyInfoBoxProps {
  postCount: number;
}

export default function MyInfoBox({ postCount }: MyInfoBoxProps) {
  const { userInfo } = useAuthStore();
  const { userId, userImg, userName } = userInfo;
  const pathname = usePathname();
  const user = pathname ? pathname.split("/")[1] : "";
  const curUser = decodeURIComponent(user);
  const isMypage = curUser === userName;

  const { data: infoDetail } = useCustomQuery<myinfoDetailProps, Error>(
    QUERY_KEYS.USERS.MYPAGE.queryKey,
    UserService.getMyinfo,
    { gcTime: 1000 * 60 * 60, staleTime: 1000 * 60 * 60 },
  );

  const router = useRouter();

  const handleEditProfile = () => {
    router.push(ROUTE.PROPFILE_SETTING);
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
                value={BUTTON_TEXT.EDIT_PROFILE}
                $bgColor="#efefef"
                radius={10}
                fontSize="14px"
              />
            ) : (
              <>
                <BaseButton value={BUTTON_TEXT.FOLLOW} $bgColor="#efefef" radius={10} fontSize="14px" />
                <BaseButton value={BUTTON_TEXT.SEND_MSG} $bgColor="#efefef" radius={10} fontSize="14px" />
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

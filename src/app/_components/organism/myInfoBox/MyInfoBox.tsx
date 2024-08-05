import Avatar from "@/_components/atoms/avatar/Avatar";
import { Flex } from "@/_styles/common.style";
import { InfoBox } from "./MyinfoBox.style";
import useAuthStore from "@/_stores/client/authStore";
import BaseButton from "@/_components/atoms/button/BaseButton";
import { getRandomNumber } from "@/_utils/utils";
import { useRouter } from "next/navigation";

interface MyInfoBoxProps {
  postCount: number;
}

export default function MyInfoBox({ postCount }: MyInfoBoxProps) {
  const { userInfo } = useAuthStore();
  const { userId, userImg, userName } = userInfo;
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
        <Avatar img={userImg} size={150} />
        <InfoBox.Infos>
          <Flex>
            <BaseButton value={userName} fontWeight={500} fontSize="20px" />
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
            <BaseButton value={`팔로워 ${getRandomNumber(500)}`} fontWeight={500} />
            <BaseButton value={`팔로우 ${getRandomNumber(500)}`} fontWeight={500} />
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

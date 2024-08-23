import Avatar from "@components/atoms/avatar/Avatar";
import { Bar } from "./RecommendedUserBar.style";
import useAuthStore from "@/_stores/client/authStore";
import BaseButton from "@/_components/atoms/button/BaseButton";
import { UserProps } from "@/_types/user";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/_constant/route";

interface RecommendedUsersProps {
  user: UserProps;
}

export default function RecommendedUserBar({ user }: RecommendedUsersProps) {
  const { userInfo } = useAuthStore();
  const router = useRouter();
  const handleUserClick = () => {
    router.push(ROUTE.USER(user ? user.userName : ""));
  };
  const handleFollowClick = () => {};

  const myInfo = user.userName === userInfo.userName;

  return (
    <Bar.Wrapper>
      <Bar.User>
        <Avatar size={44} img={user ? user.userImg : userInfo.userImg} />
        <Bar.UserInfo>
          <BaseButton onClick={handleUserClick} value={user ? user.userName : userInfo.userName} />
          {myInfo ? `It's me!` : "Instagram 신규 가입"}
        </Bar.UserInfo>
        <BaseButton
          isActive={true}
          value={myInfo ? "전환" : "팔로우"}
          fontSize="12px"
          color="#0095F6 !important"
          onClick={handleFollowClick}
        />
      </Bar.User>
    </Bar.Wrapper>
  );
}

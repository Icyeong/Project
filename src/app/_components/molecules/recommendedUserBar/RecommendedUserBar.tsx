import Avatar from "@components/atoms/avatar/Avatar";
import { Bar } from "./RecommendedUserBar.style";
import useAuthStore from "@/_stores/client/authStore";
import BaseButton from "@/_components/atoms/button/BaseButton";
import { UserProps } from "../user/User";

interface RecommendedUsersProps {
  user?: UserProps;
}

export default function RecommendedUserBar({ user }: RecommendedUsersProps) {
  const { userName, userImg } = useAuthStore();
  const handleUserClick = () => {};
  const handleFollowClick = () => {};
  return (
    <Bar.Wrapper>
      <Bar.User>
        <Avatar size={44} img={user ? user.img : userImg} />
        <Bar.UserInfo>
          <span>{user ? user.username : userName}</span>
          {user ? "Instagram 신규 가입" : `It's me!`}
        </Bar.UserInfo>
        <BaseButton
          isActive={true}
          value={user ? "팔로우" : "전환"}
          fontSize="12px"
          color="#0095F6"
          onClick={handleFollowClick}
        />
      </Bar.User>
    </Bar.Wrapper>
  );
}

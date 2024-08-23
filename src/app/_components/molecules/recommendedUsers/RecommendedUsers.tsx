import { Users } from "./RecommendedUsers.style";
import { createUser } from "@/_dummyData/userDummy";
import BaseButton from "@/_components/atoms/button/BaseButton";
import RecommendedUserBar from "../recommendedUserBar/RecommendedUserBar";
import useAuthStore from "@/_stores/client/authStore";
import { UserProps } from "@/_types/user";

export default function RecommendedUsers() {
  const { userInfo } = useAuthStore();
  const users: UserProps[] = createUser(5);

  const handleSeeAllClick = () => {};
  return (
    <Users.Container>
      <Users.MyInfo>
        <RecommendedUserBar user={userInfo} />
      </Users.MyInfo>
      <Users.Title>
        회원님을 위한 추천
        <BaseButton value="모두 보기" fontSize="12px" color="black" onClick={handleSeeAllClick} />
      </Users.Title>
      <Users.Recommends>
        {users.map((user) => (
          <RecommendedUserBar key={user.userId} user={user} />
        ))}
      </Users.Recommends>
    </Users.Container>
  );
}

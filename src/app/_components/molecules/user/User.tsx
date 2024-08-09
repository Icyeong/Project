import { UserStyle } from "./User.style";
import Avatar from "@components/atoms/avatar/Avatar";
import { UserProps } from "@/_types/user";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/_constant/route";

export default function User({ userName, userImg }: UserProps) {
  const router = useRouter();
  const handleStoryClick = () => {
    router.push(ROUTE.USER_STORY(userName));
  };
  return (
    <UserStyle.User onClick={handleStoryClick}>
      <Avatar img={userImg} />
      <UserStyle.UserName>{userName}</UserStyle.UserName>
    </UserStyle.User>
  );
}

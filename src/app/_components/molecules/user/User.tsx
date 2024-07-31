import { UserStyle } from "./User.style";
import Avatar from "@components/atoms/avatar/Avatar";
import { UserProps } from "@/_types/user";
import { useRouter } from "next/navigation";

export default function User({ userName, userImg }: UserProps) {
  const router = useRouter();
  const handleStoryClick = () => {
    router.push(`/stories/${userName}`);
  };
  return (
    <UserStyle.User onClick={handleStoryClick}>
      <Avatar img={userImg} />
      <UserStyle.UserName>{userName}</UserStyle.UserName>
    </UserStyle.User>
  );
}

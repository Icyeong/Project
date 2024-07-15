import { Bar } from "./UserBar.style";
import Avatar from "@/_components/atoms/avatar/Avatar";
import { UserProps } from "../user/User";
import useFeedStore from "@/_stores/client/feedStore";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { MouseEvent } from "react";
import { faker } from "@faker-js/faker";

interface UserBarProps {
  user: UserProps;
  deleteButton?: boolean;
}

export default function UserBar({ user, deleteButton }: UserBarProps) {
  const { addSearchHistory, deleteSearchHistory } = useFeedStore();
  const router = useRouter();

  const handleUserClick = () => {
    addSearchHistory(user);
    router.push(`/${user.username}`);
  };

  const handleDeleteHistory = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteSearchHistory(user.userId);
  };
  return (
    <Bar.Wrapper>
      <Bar.Button onClick={handleUserClick}>
        <Avatar size={44} img={user.img} />
        <Bar.UserInfo>
          <span>{user.username}</span>
          {faker.person.fullName()}님이 팔로우합니다
        </Bar.UserInfo>
        {deleteButton && (
          <Bar.CloseButton onClick={handleDeleteHistory}>
            <FontAwesomeIcon icon={faClose} />
          </Bar.CloseButton>
        )}
      </Bar.Button>
    </Bar.Wrapper>
  );
}

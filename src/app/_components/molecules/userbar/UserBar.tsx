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
  isTagUser?: boolean;
  handleTagClick?: (user: UserProps) => void;
}

export default function UserBar({ user, deleteButton, isTagUser, handleTagClick }: UserBarProps) {
  const { addSearchHistory, deleteSearchHistory } = useFeedStore();
  const router = useRouter();

  const handleUserClick = () => {
    if (handleTagClick) {
      handleTagClick(user);
    } else {
      addSearchHistory(user);
      router.push(`/${user.userName}`);
    }
  };

  const handleDeleteHistory = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteSearchHistory(user.userId);
  };
  return (
    <Bar.Wrapper>
      <Bar.Button onClick={handleUserClick}>
        {isTagUser && (
          <>
            <Avatar size={30} img={user.userImg} />
            <Bar.UserInfo>
              <span>{user.userName}</span>
            </Bar.UserInfo>
          </>
        )}

        {!isTagUser && (
          <>
            <Avatar size={44} img={user.userImg} />
            <Bar.UserInfo>
              <span>{user.userName}</span>
              {faker.person.fullName()}님이 팔로우합니다
            </Bar.UserInfo>
          </>
        )}
      </Bar.Button>
      {deleteButton && (
        <Bar.CloseButton onClick={handleDeleteHistory}>
          <FontAwesomeIcon icon={faClose} />
        </Bar.CloseButton>
      )}
    </Bar.Wrapper>
  );
}

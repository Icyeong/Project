import { Bar } from "./UserBar.style";
import Avatar from "@/_components/atoms/avatar/Avatar";
import useFeedStore from "@/_stores/client/feedStore";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { MouseEvent, useEffect, useRef } from "react";
import { faker } from "@faker-js/faker";
import { UserProps } from "@/_types/user";

interface UserBarProps {
  user: UserProps;
  deleteButton?: boolean;
  isTagUser?: boolean;
  focused?: boolean;
  onTagClick?: (user: UserProps) => void;
}

export default function UserBar({ user, deleteButton, isTagUser, focused, onTagClick }: UserBarProps) {
  const { addSearchHistory, deleteSearchHistory } = useFeedStore();
  const router = useRouter();

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleUserClick = () => {
    if (onTagClick) {
      onTagClick(user);
    } else {
      addSearchHistory(user);
      router.push(`/${user.userName}`);
    }
  };

  const handleDeleteHistory = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteSearchHistory(user.userId);
  };

  useEffect(() => {
    if (buttonRef.current && focused) {
      buttonRef.current.focus();
    }
  }, [focused]);

  return (
    <Bar.Wrapper>
      <Bar.Button ref={buttonRef} onClick={handleUserClick}>
        <Avatar size={isTagUser ? 30 : 44} img={user.userImg} />
        <Bar.UserInfo>
          <span>{user.userName}</span>
          {!isTagUser && faker.person.fullName() + "님이 팔로우합니다"}
        </Bar.UserInfo>
      </Bar.Button>
      {deleteButton && (
        <Bar.CloseButton onClick={handleDeleteHistory}>
          <FontAwesomeIcon icon={faClose} />
        </Bar.CloseButton>
      )}
    </Bar.Wrapper>
  );
}

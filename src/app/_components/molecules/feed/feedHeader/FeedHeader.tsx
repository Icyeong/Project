import { Header } from "./FeedHeader.style";
import Avatar from "@components/atoms/avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import useAuthStore from "@/_stores/client/authStore";
import useModalStore from "@/_stores/client/modalStore";
import { MODAL } from "@/_constant/modal";
import useFeedStore from "@/_stores/client/feedStore";
import { useCallback } from "react";
import { FeedProps } from "@/_types/feed";
import { useRouter } from "next/navigation";

dayjs.locale("ko");
dayjs.extend(relativeTime);

interface FeedHeaderProps extends FeedProps {
  size?: string;
}

export default function FeedHeader(feed: FeedHeaderProps) {
  const { userName, userImg, createdAt, following, size } = feed;
  const { setModal, openModal } = useModalStore();
  const { setSelectedFeed } = useFeedStore();
  const { userInfo } = useAuthStore();
  const router = useRouter();

  const isMyFeed = () => {
    return userName === userInfo.userName;
  };

  const handleUserClick = () => {
    router.push(`/${userName}`);
  };

  const handleOptionClick = useCallback(() => {
    setSelectedFeed(feed);
    setModal(MODAL.FEED_OPTION);
    openModal();
  }, [setSelectedFeed, setModal, openModal, feed]);

  return (
    <Header.Container $size={size === "S" ? 48 : 70}>
      <Avatar size={size === "S" ? 34 : 42} img={isMyFeed() ? userInfo.userImg : userImg} />
      <Header.Box>
        <Header.Username onClick={handleUserClick}>{userName}</Header.Username>
        <Header.TimeStamp>{dayjs(createdAt).fromNow(true)}</Header.TimeStamp>

        {!isMyFeed() && !following && <Header.Follow>팔로우</Header.Follow>}
      </Header.Box>
      <Header.Button onClick={handleOptionClick}>
        <FontAwesomeIcon icon={faEllipsis} />
      </Header.Button>
    </Header.Container>
  );
}

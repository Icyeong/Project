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
import { FeedProps } from "../Feed";
import useFeedStore from "@/_stores/client/feedStore";

dayjs.locale("ko");
dayjs.extend(relativeTime);

interface FeedHeaderProps extends FeedProps {
  size?: string;
}

export default function FeedHeader(feed: FeedHeaderProps) {
  const { username, img, createdAt, following, size } = feed;
  const { setModal, openModal } = useModalStore();
  const { setSelectedFeed } = useFeedStore();
  const { userInfo } = useAuthStore();

  const isMyFeed = () => {
    return username === userInfo.userName;
  };

  const handleOptionClick = () => {
    setSelectedFeed(feed);
    setModal(MODAL.FEED_OPTION);
    openModal();
  };

  return (
    <Header.Container $size={size === "S" ? 48 : 70}>
      <Avatar size={size === "S" ? 34 : 42} img={isMyFeed() ? userInfo.userImg : img} />
      <Header.Box>
        <Header.Username>{username}</Header.Username>
        <Header.TimeStamp>{dayjs(createdAt).fromNow(true)}</Header.TimeStamp>

        {!isMyFeed() && !following && <Header.Follow>팔로우</Header.Follow>}
      </Header.Box>
      <Header.Button onClick={handleOptionClick}>
        <FontAwesomeIcon icon={faEllipsis} />
      </Header.Button>
    </Header.Container>
  );
}

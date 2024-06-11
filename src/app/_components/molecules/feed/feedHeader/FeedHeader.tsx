import React from "react";
import { Header } from "./FeedHeader.style";
import Avatar from "@/app/_components/atoms/avatar/Avatar";
import { faker } from "@faker-js/faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

interface FeedHeaderProps {
  username: string;
  createdAt: string;
  following: boolean;
}

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function FeedHeader({ username, createdAt, following }: FeedHeaderProps) {
  return (
    <Header.Container>
      <Avatar size={32} img={faker.image.avatar()} />
      <Header.Box>
        <Header.Username>{username}</Header.Username>
        <Header.TimeStamp>{dayjs(createdAt).fromNow(true)}</Header.TimeStamp>

        {!following && <Header.Follow>팔로우</Header.Follow>}
      </Header.Box>
      <Header.Button>
        <FontAwesomeIcon icon={faEllipsis} />
      </Header.Button>
    </Header.Container>
  );
}

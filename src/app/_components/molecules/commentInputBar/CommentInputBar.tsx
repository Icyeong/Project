import { KeyboardEvent, useCallback, useState } from "react";
import { Input } from "./commentInputBar.style";
import TextArea from "@components/atoms/textarea/TextArea";
import BaseButton from "@components/atoms/button/BaseButton";
import useAuthStore, { UserInfoType } from "@/_stores/client/authStore";
import { hasEmptyProps, isTxtNotEmpty } from "@/_utils/utils";
import { useCustomMutation, useCustomQuery } from "@/_hooks/useFetch";
import { FeedService } from "@/_services/feed_service";
import { queryClient } from "@/(pages)/App";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { InvalidateQueryFilters } from "@tanstack/react-query";
import { INPUT_TEXT } from "@/_constant/input";
import UserBar from "../userbar/UserBar";
import { UserProps } from "../user/User";
import classNames from "classnames";
import { UserService } from "@/_services/user_service";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import IconButton from "@/_components/atoms/button/IconButton";

export interface CommentInfoProps extends UserInfoType {
  comment: string;
  createdAt: string;
}

interface CommentInputBarProps {
  feedId: string;
  ver?: number;
}

export default function CommentInputBar({ feedId, ver }: CommentInputBarProps) {
  const { userInfo } = useAuthStore();
  const [tagging, setTagging] = useState(false);
  const [commentInfo, setCommentInfo] = useState<CommentInfoProps>({
    ...userInfo,
    comment: "",
    createdAt: "",
  });

  const { data, refetch } = useCustomQuery(
    QUERY_KEYS.USERS.FOLLOWING.queryKey,
    () => UserService.getFollowingList(userInfo.userId),
    { enabled: false },
  );
  const [allUsers, setAllUsers] = useState<UserProps[]>([]);
  const [taggingUsers, setTaggingUsers] = useState<UserProps[]>([]);
  const [taggedUsers, setTaggedUsers] = useState<UserProps[]>([]);
  const [tagStartIdx, setTagStartIdx] = useState<number>(0);

  const handleInputChange = useCallback(
    async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      const char = value.slice(-1);

      setCommentInfo((prev) => ({ ...prev, comment: e.target.value }));

      if (char === "@") {
        refetch();
        const idx = value.length - 1;
        setTagStartIdx(idx);
        setAllUsers(data);
        setTaggingUsers(data);
        setTagging(true);
      }

      if (tagging) {
        const lastWord = value.split(" ").slice(-1)[0];
        if (!lastWord.includes("@")) {
          setTagging(false);
        }
        const searching = value.split("@").slice(-1)[0];
        const filtered: UserProps[] = data.filter((user: UserProps) =>
          user.userName.toLowerCase().includes(searching?.toLowerCase()),
        );
        setTaggingUsers(filtered);
      }
    },
    [data, refetch],
  );

  const { mutate: mutateComment } = useCustomMutation(FeedService.addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.FEED.LIST.queryKey as InvalidateQueryFilters);
      setCommentInfo((prev) => ({ ...prev, comment: "", createdAt: "" }));
    },
  });

  const handleInputKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!isTxtNotEmpty(commentInfo.comment) && e.code === "Enter") {
      e.preventDefault();
    }
    if (isTxtNotEmpty(commentInfo.comment) && e.code === "Enter") {
      return handleCommentClick();
    }
  };

  const handleCommentClick = () => {
    const fetchData = { ...commentInfo, createdAt: String(new Date()) };
    if (!hasEmptyProps(fetchData)) {
      mutateComment({ feedId, fetchData });
    }
  };

  const onTagClick = (user: UserProps) => {
    setTaggedUsers((prev) => ({ ...prev, user }));
    const comment = commentInfo.comment.slice(0, tagStartIdx + 1);
    setCommentInfo((prev) => ({ ...prev, comment: comment + user.userName + " " }));
    setTagging(false);
  };

  return (
    <Input.Container $padding={ver === 2 ? "6px 16px 6px 0px" : "0"}>
      <Input.PopOver className={classNames({ show: tagging })}>
        {taggingUsers?.map((friend) => (
          <UserBar key={friend.userId} user={friend} isTagUser={true} onTagClick={onTagClick} />
        ))}
      </Input.PopOver>
      {ver === 2 && <IconButton awesomeIcon={faSmile} />}
      <TextArea
        value={commentInfo.comment}
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        placeholder={INPUT_TEXT.COMMENT}
        taggedUsers={taggedUsers}
      />
      {isTxtNotEmpty(commentInfo.comment) && ver !== 2 && (
        <BaseButton onClick={handleCommentClick} fontSize="14" color="#0095f6" value="게시" />
      )}
      {ver && <BaseButton onClick={handleCommentClick} fontSize="14" color="#0095f6" value="게시" />}
    </Input.Container>
  );
}

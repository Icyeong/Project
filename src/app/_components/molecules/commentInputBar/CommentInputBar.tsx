import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { Input } from "./commentInputBar.style";
import { TextArea } from "@components/atoms/textarea/TextArea";
import BaseButton from "@components/atoms/button/BaseButton";
import useAuthStore from "@/_stores/client/authStore";
import { isArrNotEmpty, isTxtNotEmpty } from "@/_utils/utils";
import { useCustomMutation, useCustomQuery } from "@/_hooks/useFetch";
import { FeedService } from "@/_services/feed_service";
import { queryClient } from "@/(pages)/App";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { InvalidateQueryFilters } from "@tanstack/react-query";
import { INPUT_TEXT, KEY_CODE } from "@/_constant/input";
import UserBar from "../userbar/UserBar";
import classNames from "classnames";
import { UserService } from "@/_services/user_service";
import { UserProps } from "@/_types/user";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import IconButton from "@/_components/atoms/button/IconButton";
import { useOutsideClick } from "@/_hooks/useOutsideClick";
import { isCommentInfoProps } from "@/_dummyData/feedDummy";

interface CommentInputBarProps {
  feedId: string;
  ver?: number;
}

export default function CommentInputBar({ feedId, ver }: CommentInputBarProps) {
  const { userInfo } = useAuthStore();
  const [tagging, setTagging] = useState(false);
  const [taggingUsers, setTaggingUsers] = useState<UserProps[]>([]);
  const [taggedUsers, setTaggedUsers] = useState<UserProps[]>([]);
  const [tagStartIdx, setTagStartIdx] = useState<number>(0);
  const [tabFocusedIdx, setTabFocusedIdx] = useState<number>(-1);
  const [comment, setComment] = useState<string>("");

  const popOverRef = useRef<HTMLUListElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { data, refetch } = useCustomQuery(
    QUERY_KEYS.USERS.FOLLOWING.queryKey,
    () => UserService.getFollowingList(userInfo.userId),
    { enabled: false },
  );
  const handleInputChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setComment(value);

    if (value.endsWith("@")) {
      refetch();
      const idx = value.length - 1;
      setTagStartIdx(idx);
      setTagging(true);
    }

    if (tagging) {
      const lastWord = value.split(" ").slice(-1)[0];
      if (!lastWord.includes("@")) {
        setTabFocusedIdx(-1);
        setTagging(false);
      }
      const searching = value.split("@").slice(-1)[0];
      const filtered: UserProps[] = data.filter((user: UserProps) =>
        user.userName.toLowerCase().includes(searching?.toLowerCase()),
      );
      setTaggingUsers(filtered);
    }
  };

  const { mutate: mutateComment } = useCustomMutation(FeedService.addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries([...QUERY_KEYS.FEED.DETAIL.queryKey, feedId] as InvalidateQueryFilters);
      setComment("");
      setTaggedUsers([]);
    },
  });

  const handleInputKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === KEY_CODE.ESCAPE) {
      e.preventDefault();
      setTagging(false);
      setTabFocusedIdx(-1);
    }

    if (e.code === KEY_CODE.TAB) {
      e.preventDefault();
      setTabFocusedIdx(tabFocusedIdx + 1);
    }

    if (!isTxtNotEmpty(comment) && e.code === KEY_CODE.ENTER) {
      e.preventDefault();
    }
    if (isTxtNotEmpty(comment) && comment !== "@" && e.code === KEY_CODE.ENTER) {
      return handleCommentClick();
    }
  };

  const handleCommentClick = () => {
    const fetchData = { ...userInfo, comment, createdAt: String(new Date()), taggedUsers };
    console.log("fetchData : ", fetchData);
    if (isCommentInfoProps(fetchData)) {
      mutateComment({ feedId, fetchData });
    }
  };

  const onTagClick = (user: UserProps) => {
    setTaggedUsers((prev) => [...prev, user]);
    const prevComment = comment.slice(0, tagStartIdx + 1);
    setComment(prevComment + user.userName + " ");
    setTagging(false);
    setTabFocusedIdx(-1);
    textAreaRef.current?.focus();
  };

  const { handleOutsideClick } = useOutsideClick(popOverRef, () => {
    setTagging(false);
  });

  useEffect(() => {
    if (data) {
      setTaggingUsers(data);
    }
  }, [data]);

  useEffect(() => {
    if (tabFocusedIdx === taggingUsers.length - 1 && tagging) {
      setTabFocusedIdx(0);
    }
  }, [tabFocusedIdx]);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);
  return (
    <Input.Container $padding={ver === 2 ? "6px 16px 6px 0px" : "0"}>
      <Input.PopOver ref={popOverRef} className={classNames({ show: tagging, hide: !isArrNotEmpty(taggingUsers) })}>
        {taggingUsers?.map((friend, idx) => (
          <UserBar
            key={friend.userId}
            user={friend}
            isTagUser={true}
            focused={tabFocusedIdx === idx}
            onTagClick={onTagClick}
          />
        ))}
      </Input.PopOver>
      {ver === 2 && <IconButton awesomeIcon={faSmile} />}
      <TextArea
        value={comment}
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        placeholder={INPUT_TEXT.COMMENT}
        ref={textAreaRef}
      />
      {isTxtNotEmpty(comment) && ver !== 2 && (
        <BaseButton onClick={handleCommentClick} fontSize="14" color="#0095f6" value="게시" />
      )}
      {ver && <BaseButton onClick={handleCommentClick} fontSize="14" color="#0095f6" value="게시" />}
    </Input.Container>
  );
}

import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { Input } from "./commentInputBar.style";
import TextArea from "@components/atoms/textarea/TextArea";
import BaseButton from "@components/atoms/button/BaseButton";
import useAuthStore from "@/_stores/client/authStore";
import { hasEmptyProps, isArrNotEmpty, isTxtNotEmpty } from "@/_utils/utils";
import { useCustomMutation, useCustomQuery } from "@/_hooks/useFetch";
import { FeedService } from "@/_services/feed_service";
import { queryClient } from "@/(pages)/App";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { InvalidateQueryFilters } from "@tanstack/react-query";
import { INPUT_TEXT, KEY_CODE } from "@/_constant/input";
import UserBar from "../userbar/UserBar";
import classNames from "classnames";
import { UserService } from "@/_services/user_service";
import { CommentInfoProps } from "@/_types/feed";
import { UserProps } from "@/_types/user";

interface CommentInputBarProps {
  feedId: string;
}

export default function CommentInputBar({ feedId }: CommentInputBarProps) {
  const { userInfo } = useAuthStore();
  const [tagging, setTagging] = useState(false);
  const [taggingUsers, setTaggingUsers] = useState<UserProps[]>([]);
  const [taggedUsers, setTaggedUsers] = useState<UserProps[]>([]);
  const [tagStartIdx, setTagStartIdx] = useState<number>(0);
  const [tabFocusedIdx, setTabFocusedIdx] = useState<number>(0);
  const [commentInfo, setCommentInfo] = useState<CommentInfoProps>({
    ...userInfo,
    comment: "",
    createdAt: "",
  });

  const popOverRef = useRef<HTMLUListElement>(null);

  const { data, refetch } = useCustomQuery(
    QUERY_KEYS.USERS.FOLLOWING.queryKey,
    () => UserService.getFollowingList(userInfo.userId),
    { enabled: false },
  );

  const handleInputChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const char = value.slice(-1);

    setCommentInfo((prev) => ({ ...prev, comment: e.target.value }));

    if (char === "@") {
      refetch();
      const idx = value.length - 1;
      setTagStartIdx(idx);
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
      setTagStartIdx(0);
    }
  };

  const { mutate: mutateComment } = useCustomMutation(FeedService.addComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.FEED.LIST.queryKey as InvalidateQueryFilters);
      setCommentInfo((prev) => ({ ...prev, comment: "", createdAt: "" }));
    },
  });

  const handleInputKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === KEY_CODE.ESCAPE) {
      e.preventDefault();
      setTagging(false);
    }

    if (e.code === KEY_CODE.TAB) {
      e.preventDefault();
      if (tabFocusedIdx === 0) {
        setTabFocusedIdx(-1);
      }
    }

    if (!isTxtNotEmpty(commentInfo.comment) && e.code === KEY_CODE.ENTER) {
      e.preventDefault();
    }
    if (isTxtNotEmpty(commentInfo.comment) && commentInfo.comment !== "@" && e.code === KEY_CODE.ENTER) {
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

  const handleOutsideClick = (e: MouseEvent) => {
    if (popOverRef.current && !popOverRef.current.contains(e.target as Node)) {
      setTagging(false);
    }
  };

  useEffect(() => {
    if (data) {
      setTaggingUsers(data);
    }
  }, [data]);

  useEffect(() => {
    if (tabFocusedIdx === -1) {
      setTabFocusedIdx(0);
    }
  }, [tabFocusedIdx]);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <Input.Container>
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
      <TextArea
        value={commentInfo.comment}
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        placeholder={INPUT_TEXT.COMMENT}
      />
      {isTxtNotEmpty(commentInfo.comment) && (
        <BaseButton onClick={handleCommentClick} fontSize="14" color="#0095f6" value="게시" />
      )}
    </Input.Container>
  );
}

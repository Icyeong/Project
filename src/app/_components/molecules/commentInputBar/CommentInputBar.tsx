import { KeyboardEvent, useCallback, useMemo, useState } from "react";
import { Input } from "./commentInputBar.style";
import TextArea from "@components/atoms/textarea/TextArea";
import BaseButton from "@components/atoms/button/BaseButton";
import useAuthStore, { UserInfoType } from "@/_stores/client/authStore";
import { hasEmptyProps, isTxtNotEmpty } from "@/_utils/utils";
import { useCustomMutation } from "@/_hooks/useFetch";
import { FeedService } from "@/_services/feed_service";
import { queryClient } from "@/(pages)/App";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { InvalidateQueryFilters } from "@tanstack/react-query";
import { INPUT_TEXT } from "@/_constant/input";
import UserBar from "../userbar/UserBar";
import { createUser } from "@/_dummyData/userDummy";
import { UserProps } from "../user/User";

export interface CommentInfoProps extends UserInfoType {
  comment: string;
  createdAt: string;
}

interface CommentInputBarProps {
  feedId: string;
}

export default function CommentInputBar({ feedId }: CommentInputBarProps) {
  const { userInfo } = useAuthStore();
  const [commentInfo, setCommentInfo] = useState<CommentInfoProps>({
    ...userInfo,
    comment: "",
    createdAt: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentInfo((prev) => ({ ...prev, comment: e.target.value }));
  };

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

  const handleTagClick = (user: UserProps) => {
    console.log("teg user : ", user);
  };

  const users = useMemo(() => createUser(10), []);

  return (
    <Input.Container>
      <Input.PopOver>
        {users.map((user) => (
          <UserBar key={user.userId} user={user} isTagUser={true} handleTagClick={handleTagClick} />
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

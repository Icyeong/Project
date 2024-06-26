import React from "react";
import { StoryStyle } from "./StoryBar.style";
import User, { UserPorps } from "@components/molecules/user/User";
import { useCustomQuery } from "@/_hooks/useFetch";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { StoryService } from "@/_services/story_service";
import StorySkeleton from "./StorySkeleton";

export default function StoryBar() {
  const { data, isLoading } = useCustomQuery(QUERY_KEYS.STORY.LIST.queryKey, StoryService.getStoryList);
  return (
    <>
      {isLoading && <StorySkeleton />}
      {data && !isLoading && (
        <StoryStyle.Container>
          {data.map((user: UserPorps) => (
            <User key={user.username} {...user} />
          ))}
        </StoryStyle.Container>
      )}
    </>
  );
}

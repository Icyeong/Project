import React from "react";
import { StoryStyle } from "./StoryBar.style";
import User, { UserPorps } from "../../molecules/user/User";
import { useCustomQuery } from "@/app/_hooks/useFetch";
import { QUERY_KEYS } from "@/app/_stores/server/queryKeys";
import { StoryService } from "@/app/_services/story_service";
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

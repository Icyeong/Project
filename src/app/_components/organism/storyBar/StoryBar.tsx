import React from "react";
import { StorySkeleton, StoryStyle } from "./StoryBar.style";
import User, { UserPorps } from "../../molecules/user/User";
import { useCustomQuery } from "@/app/_hooks/useFetch";
import { QUERY_KEYS } from "@/app/_stores/server/queryKeys";

export default function StoryBar() {
  const { data, isLoading } = useCustomQuery(QUERY_KEYS.STORY.LIST.queryKey, QUERY_KEYS.STORY.LIST.queryFn);
  return (
    <>
      {isLoading && <StorySkeleton />}
      {data && (
        <StoryStyle.Container>
          {data.map((user: UserPorps) => (
            <User key={user.username} {...user} />
          ))}
        </StoryStyle.Container>
      )}
    </>
  );
}

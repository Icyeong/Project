import { useEffect, useRef } from "react";
import { StoryStyle } from "./StoryBar.style";
import User from "@components/molecules/user/User";
import { useCustomQuery } from "@/_hooks/useFetch";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { StoryService } from "@/_services/story_service";
import StorySkeleton from "./StorySkeleton";
import { UserProps } from "@/_types/user";

export default function StoryBar() {
  const scrollBoxRef = useRef<HTMLDivElement | null>(null);
  const { data, isLoading } = useCustomQuery(QUERY_KEYS.STORY.LIST.queryKey, StoryService.getStoryList, {
    gcTime: 1000 * 60 * 3,
    staleTime: 1000 * 60 * 3,
  });

  useEffect(() => {
    const scrollHandler = (e: WheelEvent) => {
      if (scrollBoxRef.current && scrollBoxRef.current.contains(e.target as Node)) {
        e.preventDefault();
        scrollBoxRef.current.scrollLeft += e.deltaY;
      }
    };
    window.addEventListener("wheel", scrollHandler, { passive: false });

    return () => {
      window.removeEventListener("wheel", scrollHandler);
    };
  }, []);

  return (
    <>
      {isLoading && <StorySkeleton />}
      {data && !isLoading && (
        <StoryStyle.Container ref={scrollBoxRef}>
          {data.map((user: UserProps) => (
            <User key={user.userId} {...user} />
          ))}
        </StoryStyle.Container>
      )}
    </>
  );
}

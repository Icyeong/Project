"use client";
import { HomeLayoutStyle } from "@/_styles/common.style";
import { Template } from "./Template.style";
import PhotoList from "@components/organism/photolist/PhotoList";
import { useInfiniteQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { FeedService } from "@/_services/feed_service";

export default function ExploreTemplate() {
  const queryData = useInfiniteQuery({
    queryKey: QUERY_KEYS.FEED.PHOTO_PIECES.queryKey,
    queryFn: ({ pageParam = 0 }) => FeedService.getFeedsList(pageParam),
    gcTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
  });
  return (
    <HomeLayoutStyle.Container>
      <Template.Main>
        <PhotoList {...queryData} />
      </Template.Main>
    </HomeLayoutStyle.Container>
  );
}

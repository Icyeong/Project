"use client";
import SelectBar from "@/_components/molecules/selectBar/SelectBar";
import MyInfoBox from "@/_components/organism/myInfoBox/MyInfoBox";
import PhotoList from "@/_components/organism/photolist/PhotoList";
import { FeedService } from "@/_services/feed_service";
import useAuthStore from "@/_stores/client/authStore";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { HomeLayoutStyle } from "@/_styles/common.style";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export default function MypageTemplate() {
  const { userInfo } = useAuthStore();
  let curUser = window.location.pathname.split("/")[1];
  curUser = decodeURIComponent(curUser);
  const isMypage = curUser === userInfo.userName;

  const { fetchNextPage, data, isLoading } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.FEED.PHOTO_PIECES.queryKey, userInfo.userId],
    queryFn: ({ pageParam = 0 }) => FeedService.getFeedsList(pageParam, 15, userInfo.userId),
    gcTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
  });

  const postCount = useMemo(() => data?.pages.flatMap((page) => page.feeds).length || 0, [data]);

  return (
    <HomeLayoutStyle.Container>
      <HomeLayoutStyle.Main>
        <MyInfoBox postCount={postCount} />
        <SelectBar />
        <PhotoList fetchNextPage={fetchNextPage} data={isMypage && data} isLoading={isLoading} />
      </HomeLayoutStyle.Main>
    </HomeLayoutStyle.Container>
  );
}

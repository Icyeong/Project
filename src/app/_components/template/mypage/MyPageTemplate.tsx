"use client";
import SelectBar from "@/_components/molecules/selectBar/SelectBar";
import MyInfoBox from "@/_components/organism/myInfoBox/MyInfoBox";
import PhotoList from "@/_components/organism/photolist/PhotoList";
import { FeedService } from "@/_services/feed_service";
import useAuthStore from "@/_stores/client/authStore";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { HomeLayoutStyle } from "@/_styles/common.style";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function MypageTemplate() {
  const { userInfo } = useAuthStore();
  const { fetchNextPage, data, isLoading } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.FEED.PHOTO_PIECES.queryKey, userInfo.userId],
    queryFn: ({ pageParam = 0 }) => FeedService.getFeedsList(pageParam, 15, userInfo.userId),
    gcTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
  });
  return (
    <HomeLayoutStyle.Container>
      <HomeLayoutStyle.Main>
        <MyInfoBox />
        <SelectBar />
        <PhotoList fetchNextPage={fetchNextPage} data={data} isLoading={isLoading} />
      </HomeLayoutStyle.Main>
    </HomeLayoutStyle.Container>
  );
}

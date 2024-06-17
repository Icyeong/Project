import React from "react";
import { Container } from "./FeedList.style";
import Feed, { FeedProps } from "../../molecules/feed/Feed";
import { useCustomQuery } from "@/app/_hooks/useFetch";
import { CircularProgress } from "@mui/material";
import { LoadingBox } from "@/app/_styles/common.style";
import { QUERY_KEYS } from "@/app/_stores/server/queryKeys";

export default function FeedList() {
  const { data, isLoading } = useCustomQuery(QUERY_KEYS.FEED.LIST.queryKey, QUERY_KEYS.FEED.LIST.queryFn);

  return (
    <Container>
      {isLoading && (
        <LoadingBox>
          <CircularProgress />
        </LoadingBox>
      )}
      {data && data.map((feed: FeedProps) => <Feed key={feed.feedId} {...feed} />)}
    </Container>
  );
}

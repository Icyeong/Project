import React from "react";
import { Container } from "./FeedList.style";
import Feed from "../../molecules/feed/Feed";
import { useCustomQuery } from "@/app/_hooks/useFetch";
import { QUERY_KEYS } from "@/app/_constant/keys";
import { FeedService } from "@/app/_services/feed_service";
import { CircularProgress } from "@mui/material";
import { LoadingBox } from "@/app/_styles/common.style";

export default function FeedList() {
  const { data, isLoading } = useCustomQuery(QUERY_KEYS.FEED.LIST, FeedService.getFeedsList);

  if (isLoading)
    return (
      <LoadingBox>
        <CircularProgress />
      </LoadingBox>
    );
  if (data)
    return (
      <Container>
        {data.map((feed: any) => (
          <Feed key={feed.feedId} {...feed} />
        ))}
      </Container>
    );
}

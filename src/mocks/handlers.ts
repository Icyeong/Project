import { FeedProps } from "@components/molecules/feed/Feed";
import { createPhotoPieces } from "@/_dummyData/explorDummy";
import { createFeeds, isFeedProps } from "@/_dummyData/feedDummy";
import { createStory } from "@/_dummyData/userDummy";
import { http, HttpResponse } from "msw";

const serverFeedsData: FeedProps[] = createFeeds(15);
const serverPhotoPiecesData = createPhotoPieces(100);
export const handlers = [
  http.get("/feeds", ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "0");
    const pageSize = 5;
    const start = page * pageSize;
    const end = start + pageSize;
    const feeds = serverFeedsData.slice(start, end);
    const hasNextPage = end < serverFeedsData.length;

    return HttpResponse.json({ feeds, nextPage: hasNextPage ? page + 1 : null });
  }),
  http.get("/stories", () => {
    return HttpResponse.json(createStory(16));
  }),
  http.get("/explore", ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "0");
    const pageSize = 12;
    const start = page * pageSize;
    const end = start + pageSize;
    const photos = serverPhotoPiecesData.slice(start, end);
    const hasNextPage = end < serverPhotoPiecesData.length;

    return HttpResponse.json({ photos, nextPage: hasNextPage ? page + 1 : null });
  }),
  http.post("/feed", async ({ request }) => {
    const feedData = await request.json();
    if (isFeedProps(feedData)) {
      serverFeedsData.unshift(feedData);
    } else {
      return HttpResponse.json({ error: "Invalid data format" });
    }
    return HttpResponse.json(feedData);
  }),
];

import { FeedProps } from "@components/molecules/feed/Feed";
import { createPhotoPieces } from "@/_dummyData/explorDummy";
import { createFeeds, isFeedProps } from "@/_dummyData/feedDummy";
import { createUser } from "@/_dummyData/userDummy";
import { http, HttpResponse } from "msw";
import { getRandomNumber } from "@/_utils/utils";

const serverFeedsData: FeedProps[] = createFeeds(30);
const serverPhotoPiecesData = createPhotoPieces(300);
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
    return HttpResponse.json(createUser(16));
  }),
  http.get("/explore", ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "0");
    const pageSize = 15;
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

  http.get("/search", async ({ request }) => {
    const url = new URL(request.url);
    const keyword = url.searchParams.get("keyword");

    console.log("searh keyword : ", keyword);

    // 검색결과 데이터 작업중(수정필요)
    return HttpResponse.json(createUser(getRandomNumber(20)));
  }),
];

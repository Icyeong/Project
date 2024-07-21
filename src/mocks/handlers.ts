import { FeedProps } from "@components/molecules/feed/Feed";
import { createPhotoPieces } from "@/_dummyData/explorDummy";
import { createFeeds, isCommentInfoProps, isFeedProps } from "@/_dummyData/feedDummy";
import { createUser } from "@/_dummyData/userDummy";
import { http, HttpResponse } from "msw";
import { UserProps } from "@/_components/molecules/user/User";

let serverFeedsData: FeedProps[] = createFeeds(30);
const serverPhotoPiecesData = createPhotoPieces(300);
const serverUsersData = createUser(100);
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

  http.patch("/feed", async ({ request }) => {
    const feedData = await request.json();
    if (isFeedProps(feedData)) {
      const idx = serverFeedsData.findIndex((feed) => feed.feedId === feedData.feedId);
      serverFeedsData[idx] = feedData;
      return HttpResponse.json(serverFeedsData);
    } else {
      return HttpResponse.json({ error: "Invalid data format" });
    }
  }),

  http.delete("/feed", async ({ request }) => {
    const url = new URL(request.url);
    const feedId = url.searchParams.get("id");

    const filtered = serverFeedsData.filter((feed) => feed.feedId !== feedId);
    serverFeedsData = [...filtered];
    return HttpResponse.json(feedId);
  }),

  http.post("/feed/:id/comment", async ({ request, params }) => {
    const feedId = params.id;
    console.log("msw comment feedId : ", feedId);
    const commentData = await request.json();

    const idx = serverFeedsData.findIndex((feed) => feed.feedId === feedId);
    if (isCommentInfoProps(commentData)) {
      serverFeedsData[idx].comments.unshift(commentData);
      return HttpResponse.json(commentData);
    } else {
      return HttpResponse.json({ error: "Invalid data format" });
    }
  }),

  http.get("/search", async ({ request }) => {
    const url = new URL(request.url);
    const keyword = url.searchParams.get("keyword");

    let results: UserProps[] = [];

    if (keyword) {
      const regex = new RegExp(keyword, "g");
      const filteredUsers = serverUsersData.filter((user: UserProps) => user.userName.match(regex));
      results = filteredUsers;
    }
    return HttpResponse.json(results);
  }),
];

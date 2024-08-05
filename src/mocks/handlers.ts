import { createFeeds, isCommentInfoProps, isFeedProps } from "@/_dummyData/feedDummy";
import { createUser } from "@/_dummyData/userDummy";
import { http, HttpResponse } from "msw";
import { FeedProps } from "@/_types/feed";
import { UserProps } from "@/_types/user";

let serverFeedsData: FeedProps[] = createFeeds(300);
const serverUsersData = createUser(100);
const serverFollowingData = createUser(15);
export const handlers = [
  http.get("/feeds", ({ request }) => {
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");
    const page = parseInt(url.searchParams.get("page") || "0");
    const pageSize = 15;
    const start = page * pageSize;
    const end = start + pageSize;

    if (userId !== "undefined") {
      //특정 유저의 게시물만 불러오기
      const filteredFeeds = serverFeedsData.filter((feed) => feed.userId === userId);
      const feeds = filteredFeeds.slice(start, end);
      const hasNextPage = end < filteredFeeds.length;

      return HttpResponse.json({ feeds, nextPage: hasNextPage ? page + 1 : null });
    } else {
      // 모든 게시물 불러오기
      const feeds = serverFeedsData.slice(start, end);
      const hasNextPage = end < serverFeedsData.length;

      return HttpResponse.json({ feeds, nextPage: hasNextPage ? page + 1 : null });
    }
  }),

  http.get("/feed", ({ request }) => {
    const url = new URL(request.url);
    const feedId = url.searchParams.get("feedId");

    const filtered = serverFeedsData.filter((feed) => feed.feedId === feedId)[0];

    return HttpResponse.json(filtered);
  }),
  http.get("/stories", () => {
    return HttpResponse.json(createUser(16));
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
  http.get("/following", ({ request }) => {
    const url = new URL(request.url);
    const userId = parseInt(url.searchParams.get("userId") || "");
    console.log("msw userId : ", userId);

    return HttpResponse.json(serverFollowingData);
  }),
];

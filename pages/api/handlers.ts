import { createFeeds, isCommentInfoProps, isFeedProps } from "@/_dummyData/feedDummy";
import { createUser, isMyInfoDetailProps, myInfoDetail, myinfoDetailProps } from "@/_dummyData/userDummy";
import { CommentInfoProps, FeedProps } from "@/_types/feed";
import { UserProps } from "@/_types/user";
import { Request, Response } from "express";

let serverFeedsData: FeedProps[] = createFeeds(300);
let serverMyData: myinfoDetailProps = myInfoDetail();
const serverUsersData = createUser(100);
const serverFollowingData = createUser(15);

export const myInfoHandler = (req: Request, res: Response) => {
  if (req.method === "GET") {
    res.json(serverMyData);
  } else if (req.method === "PATCH") {
    const fetchData = req.body;
    serverMyData = fetchData;
    res.json(serverMyData);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export const feedsHandler = (req: Request, res: Response) => {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const url = new URL(req.url || "", `${protocol}://${req.headers.host}`);
  const userId = url.searchParams.get("userId");
  const page = parseInt(url.searchParams.get("page") || "0");
  const pageSize = parseInt(url.searchParams.get("size") || "5");
  const start = page * pageSize;
  const end = start + pageSize;

  if (userId !== "undefined") {
    //특정 유저의 게시물만 불러오기
    const filteredFeeds = serverFeedsData.filter((feed) => feed.userId === userId);
    const feeds = filteredFeeds.slice(start, end);
    const hasNextPage = end < filteredFeeds.length;

    res.json({ feeds, nextPage: hasNextPage ? page + 1 : null });
  } else {
    // 모든 게시물 불러오기
    const feeds = serverFeedsData.slice(start, end);
    const hasNextPage = end < serverFeedsData.length;

    res.json({ feeds, nextPage: hasNextPage ? page + 1 : null });
  }
};

export const feedHandler = (req: Request, res: Response) => {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  if (req.method === "GET") {
    const url = new URL(req.url || "", `${protocol}://${req.headers.host}`);
    const feedId = url.searchParams.get("feedId");
    const filtered = serverFeedsData.filter((feed) => feed.feedId === feedId)[0];

    res.json(filtered);
  } else if (req.method === "POST") {
    const feedData = req.body;
    if (isFeedProps(feedData)) {
      serverFeedsData.unshift(feedData);
    } else {
      res.json({ error: "Invalid data format" });
    }
  } else if (req.method === "PATCH") {
    const feedData = req.body;
    if (isFeedProps(feedData)) {
      const idx = serverFeedsData.findIndex((feed) => feed.feedId === feedData.feedId);
      serverFeedsData[idx] = feedData;
      res.json(serverFeedsData);
    } else {
      res.json({ error: "Invalid data format" });
    }
  } else if (req.method === "DELETE") {
    const url = new URL(req.url || "", `${protocol}://${req.headers.host}`);
    const feedId = url.searchParams.get("id");

    const filtered = serverFeedsData.filter((feed) => feed.feedId !== feedId);
    serverFeedsData = [...filtered];
    res.json(feedId);
  }
};

export const commentHandler = (req: Request, res: Response) => {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  if (req.method === "POST") {
    const url = new URL(req.url || "", `${protocol}://${req.headers.host}`);
    const commentId = url.searchParams.get("id") || "0";
    const feedId = url.pathname.split("/")[3];
    const commentData = req.body;

    const idx = serverFeedsData.findIndex((feed) => feed.feedId === feedId);
    const feed = serverFeedsData[idx].comments;
    if (isCommentInfoProps(commentData)) {
      const addRecursively = (commentsArr: CommentInfoProps["comments"]) => {
        for (let i = 0; i < commentsArr.length; i++) {
          const commentIdx = commentsArr[i].commentId === commentId;
          if (commentIdx) {
            commentsArr[i].comments.unshift(commentData);
            return true;
          }

          if (addRecursively(commentsArr[i].comments)) return true;
        }
        return false;
      };

      if (!addRecursively(feed)) {
        feed.unshift(commentData);
      }
      res.json(commentData);
    } else {
      res.json({ error: "Invalid data format" });
    }
  }
};

export const searchHandler = (req: Request, res: Response) => {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const url = new URL(req.url || "", `${protocol}://${req.headers.host}`);
  const keyword = url.searchParams.get("keyword");

  let results: UserProps[] = [];

  if (keyword) {
    const regex = new RegExp(keyword, "g");
    const filteredUsers = serverUsersData.filter((user: UserProps) => user.userName.match(regex));
    results = filteredUsers;
  }
  res.json(results);
};

export const storiesHandler = (req: Request, res: Response) => {
  res.json(createUser(16));
};

export const followingHandler = (req: Request, res: Response) => {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const url = new URL(req.url || "", `${protocol}://${req.headers.host}`);
  const userId = parseInt(url.searchParams.get("userId") || "");

  res.json(serverFollowingData);
};

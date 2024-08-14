import { NextApiRequest, NextApiResponse } from "next";
import {
  myInfoHandler,
  feedsHandler,
  feedHandler,
  commentHandler,
  searchHandler,
  storiesHandler,
  followingHandler,
} from "./handlers";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req;
  const expressReq = req as any;
  const expressRes = res as any;

  const path = url?.split("?")[0] || "";

  if (url?.startsWith("/api/myinfo")) {
    return myInfoHandler(expressReq, expressRes);
  } else if (url?.startsWith("/api/feeds")) {
    return feedsHandler(expressReq, expressRes);
  } else if (path.startsWith("/api/feed")) {
    if (path.includes("/comment")) {
      return commentHandler(expressReq, expressRes);
    } else {
      return feedHandler(expressReq, expressRes);
    }
  } else if (url?.startsWith("/api/search")) {
    return searchHandler(expressReq, expressRes);
  } else if (url?.startsWith("/api/stories")) {
    return storiesHandler(expressReq, expressRes);
  } else if (url?.startsWith("/api/following")) {
    return followingHandler(expressReq, expressRes);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
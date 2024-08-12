import { BASE_DOMAIN } from "@/_env/env";
import { CommentInfoProps, FeedProps } from "@/_types/feed";
import { getErrorHandler, getFetchOptions } from "@/_utils/utils";

const getFeedsList = async (page: number, size: number, userId?: string) => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/feeds?page=${page}?&size=${size}?&userId=${userId}`);
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    getErrorHandler(error);
  }
};

const getFeedDetail = async (feedId: string) => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/feed?feedId=${feedId}`);
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    getErrorHandler(error);
  }
};

const postFeed = async (fetchData: FeedProps) => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/feed`, getFetchOptions("POST", true, fetchData));
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    getErrorHandler(error);
  }
};

const editFeed = async (fetchData: FeedProps) => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/feed`, getFetchOptions("PATCH", true, fetchData));
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    getErrorHandler(error);
  }
};

const deleteFeed = async (feedId: string) => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/feed?id=${feedId}`, getFetchOptions("DELETE", true, null));
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    getErrorHandler(error);
  }
};

const addComment = async ({
  feedId,
  commentId,
  fetchData,
}: {
  feedId: string;
  commentId?: string;
  fetchData: CommentInfoProps;
}) => {
  try {
    const res = await fetch(
      `${BASE_DOMAIN}/feed/${feedId}/comment?id=${commentId || "0"}`,
      getFetchOptions("POST", true, fetchData),
    );
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    getErrorHandler(error);
  }
};

const getSearchedResults = async (keyword: string) => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/search?keyword=${keyword}`);
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    getErrorHandler(error);
  }
};

export const FeedService = {
  getFeedsList,
  getFeedDetail,
  postFeed,
  editFeed,
  deleteFeed,
  addComment,
  getSearchedResults,
};

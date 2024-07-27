import { CommentInfoProps } from "@components/molecules/commentInputBar/CommentInputBar";
import { FeedProps } from "@components/molecules/feed/Feed";
import { BASE_DOMAIN } from "@/_env/env";
import { getErrorHandler, getFetchOptions } from "@/_utils/utils";

const getFeedsList = async (page: number) => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/feeds?page=${page}`);
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    getErrorHandler(error);
  }
};

const getPhotoPieces = async (page: number) => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/explore?page=${page}`);
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

const addComment = async ({ feedId, fetchData }: { feedId: string; fetchData: CommentInfoProps }) => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/feed/${feedId}/comment`, getFetchOptions("POST", true, fetchData));
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
  getPhotoPieces,
  postFeed,
  editFeed,
  deleteFeed,
  addComment,
  getSearchedResults,
};

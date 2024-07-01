import { FeedProps } from "@/_components/molecules/feed/Feed";
import { BASE_DOMAIN } from "@/_env/env";
import { getErrorHandler, getFetchOptions } from "@/_utils/utils";

const getFeedsList = async () => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/feeds`);
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    getErrorHandler(error);
  }
};

const getPhotoPieces = async () => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/explore`);
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

export const FeedService = {
  getFeedsList,
  getPhotoPieces,
  postFeed,
};

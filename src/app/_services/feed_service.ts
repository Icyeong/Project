import { FeedProps } from "@/_components/molecules/feed/Feed";
import { BASE_DOMAIN } from "@/_env/env";
import { getFetchOptions } from "@/_utils/utils";
import { getCookie } from "cookies-next";

const getFeedsList = async () => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/feeds`);
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return console.error(error.message);
    } else {
      return console.error("unexpected error");
    }
  }
};

const getPhotoPieces = async () => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/explore`);
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return console.error(error.message);
    } else {
      return console.error("unexpected error");
    }
  }
};

const postFeed = async (fetchData: FeedProps) => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/feed`, getFetchOptions("POST", true, fetchData));
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return console.error(error.message);
    } else {
      return console.error("unexpected error");
    }
  }
};

export const FeedService = {
  getFeedsList,
  getPhotoPieces,
  postFeed,
};

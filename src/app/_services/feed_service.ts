import { BASE_DOMAIN } from "../_env/env";

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

export const FeedService = {
  getFeedsList,
};

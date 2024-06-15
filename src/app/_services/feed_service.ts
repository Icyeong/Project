import { BASE_DOMAIN } from "../_env/env";

const getFeedsList = async () => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/feeds`);
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("unexpected error");
    }
  }
};

export const FeedService = {
  getFeedsList,
};

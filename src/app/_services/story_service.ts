import { BASE_DOMAIN } from "@/_env/env";

const getStoryList = async () => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/stories`);
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

export const StoryService = {
  getStoryList,
};

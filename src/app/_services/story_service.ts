import { BASE_DOMAIN } from "@/_env/env";
import { getErrorHandler } from "@/_utils/utils";

const getStoryList = async () => {
  try {
    const res = await fetch(`/api/stories`);
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    getErrorHandler(error);
  }
};

export const StoryService = {
  getStoryList,
};

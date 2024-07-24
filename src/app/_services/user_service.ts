import { BASE_DOMAIN } from "@/_env/env";
import { getErrorHandler } from "@/_utils/utils";

const getFollowingList = async (userId: string) => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/following?userId=${userId}`);
    const data = await res.json();
    console.log("data : ", data);
    return data;
  } catch (error: unknown) {
    getErrorHandler(error);
  }
};

export const UserService = { getFollowingList };

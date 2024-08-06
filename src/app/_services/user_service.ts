import { myinfoDetailProps } from "@/_dummyData/userDummy";
import { BASE_DOMAIN } from "@/_env/env";
import { getErrorHandler, getFetchOptions } from "@/_utils/utils";

const getFollowingList = async (userId: string) => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/following?userId=${userId}`);
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    getErrorHandler(error);
  }
};

const getMyinfo = async () => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/myinfo`);
    const data = await res.json();
    return data;
  } catch (error: unknown) {
    getErrorHandler(error);
  }
};

const editMyinfo = async (fetchData: myinfoDetailProps) => {
  try {
    const res = await fetch(`${BASE_DOMAIN}/myinfo`, getFetchOptions("PATCH", true, fetchData));
    const data = await res.json();
    console.log("data : ", data);
    return data;
  } catch (error: unknown) {
    getErrorHandler(error);
  }
};

export const UserService = { getFollowingList, getMyinfo, editMyinfo };

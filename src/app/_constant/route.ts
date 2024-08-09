export const ROUTE = {
  HOME: "/",
  LOGIN: "/login",
  PROPFILE_SETTING: "/accounts/edit",
  USER: (username: string) => `/${username}`,
  USER_STORY: (username: string) => `/stories/${username}`,
  FEED_DETAIL: (feedId: string) => `/p/${feedId}`,
};

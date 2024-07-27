import { createQueryKeyStore } from "@lukemorales/query-key-factory";

export const QUERY_KEYS = createQueryKeyStore({
  AUTH: {
    LOGIN: {
      queryKey: null,
    },
    GOOGLOGIN: {
      queryKey: null,
    },
    SIGNUP: {
      queryKey: null,
    },
    SIGNOUT: {
      queryKey: null,
    },
  },
  FEED: {
    LIST: {
      queryKey: null,
    },
    PHOTO_PIECES: {
      queryKey: null,
    },
  },
  STORY: {
    LIST: {
      queryKey: null,
    },
  },
  USERS: {
    FOLLOWING: {
      queryKey: null,
    },
  },
});

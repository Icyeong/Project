import { AuthService } from "@/app/_services/auth_service";
import { FeedService } from "@/app/_services/feed_service";
import { createQueryKeyStore } from "@lukemorales/query-key-factory";

export const QUERY_KEYS = createQueryKeyStore({
  AUTH: {
    LOGIN: {
      queryKey: null,
      queryFn: AuthService.signInWithEmailPassword,
    },
    GOOGLOGIN: {
      queryKey: null,
      queryFn: AuthService.signInWithGoogle,
    },
    signup: {
      queryKey: null,
      queryFn: AuthService.signupWithEmail,
    },
  },
  FEED: {
    LIST: {
      queryKey: null,
      queryFn: FeedService.getFeedsList,
    },
  },
});

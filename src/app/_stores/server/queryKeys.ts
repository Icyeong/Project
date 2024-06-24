import { AuthService } from "@/app/_services/auth_service";
import { FeedService } from "@/app/_services/feed_service";
import { StoryService } from "@/app/_services/story_service";
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
    SIGNUP: {
      queryKey: null,
      queryFn: AuthService.signupWithEmail,
      // queryFn: (variables: { email: string; password: string }) => AuthService.signupWithEmail(variables),
    },
    SIGNOUT: {
      queryKey: null,
      queryFn: AuthService.LogOut,
    },
  },
  FEED: {
    LIST: {
      queryKey: null,
      queryFn: FeedService.getFeedsList,
    },
  },
  STORY: {
    LIST: {
      queryKey: null,
      queryFn: StoryService.getStoryList,
    },
  },
});

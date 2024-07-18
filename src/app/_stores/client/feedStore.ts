import { FeedProps } from "@/_components/molecules/feed/Feed";
import { UserProps } from "@/_components/molecules/user/User";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  feedList: [],
  searchHistory: [],
};

const useFeedStore = create(
  persist<FeedState>(
    (set) => ({
      ...initialState,
      setFeedsState: (state) => set(() => ({ feedList: state })),
      addSearchHistory: (state) =>
        set((prev) => {
          const filteredHistory = prev.searchHistory.filter((history) => history.userId !== state.userId);
          return { searchHistory: [state, ...filteredHistory] };
        }),
      deleteSearchHistory: (state) =>
        set((prev) => {
          const filteredHistory = prev.searchHistory.filter((history) => history.userId !== state);
          return { searchHistory: filteredHistory };
        }),
      resetFeedState: () => set(() => initialState),
    }),
    { name: "feed-storage" },
  ),
);

interface FeedState {
  feedList: FeedProps[];
  searchHistory: UserProps[];
  setFeedsState: (state: FeedProps[]) => void;
  addSearchHistory: (state: UserProps) => void;
  deleteSearchHistory: (state: string) => void;
  resetFeedState: () => void;
}

export default useFeedStore;

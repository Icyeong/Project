import { FeedProps } from "@/_types/feed";
import { UserProps } from "@/_types/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  feedList: [],
  selectedFeed: null,
  searchHistory: [],
};

const useFeedStore = create(
  persist<FeedState>(
    (set) => ({
      ...initialState,
      setFeedsState: (state) => set(() => ({ feedList: state })),
      setSelectedFeed: (state: FeedProps) => set(() => ({ selectedFeed: state })),
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
  selectedFeed: FeedProps | null;
  searchHistory: UserProps[];
  setFeedsState: (state: FeedProps[]) => void;
  setSelectedFeed: (state: FeedProps) => void;
  addSearchHistory: (state: UserProps) => void;
  deleteSearchHistory: (state: string) => void;
  resetFeedState: () => void;
}

export default useFeedStore;

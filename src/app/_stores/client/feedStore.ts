import { FeedProps } from "@/_components/molecules/feed/Feed";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  feedList: [],
};

const useFeedStore = create(
  persist<FeedState>(
    (set) => ({
      ...initialState,
      setFeedsState: (state) => set(() => ({ feedList: state })),
      resetFeedState: () => set(() => initialState),
    }),
    { name: "feed-storage" },
  ),
);

interface FeedState {
  feedList: FeedProps[];
  setFeedsState: (state: FeedProps[]) => void;
  resetFeedState: () => void;
}

export default useFeedStore;

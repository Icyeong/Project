import { FeedState } from "@/_types/feed_type";
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

export default useFeedStore;

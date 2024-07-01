import { FeedProps } from "@/_components/molecules/feed/Feed";

export interface FeedState {
  feedList: FeedProps[];
  setFeedsState: (state: FeedProps[]) => void;
  resetFeedState: () => void;
}

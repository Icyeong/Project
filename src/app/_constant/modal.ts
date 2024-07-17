export const MODAL = {
  POST_FEED: "새 게시물 만들기",
  FEED_OPTION: "피드 옵션 보기",
  TEST: "TEST MODAL",
} as const;

export type PostModalType = (typeof POST_MODAL)[keyof typeof POST_MODAL];
export const POST_MODAL = {
  UPLOAD: "img upload",
  PREVIEW: "img preview & edit",
  WRITE: "write content",
} as const;

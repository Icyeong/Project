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

export const FEED_OPTIONS_MODAL = {
  MYFEED: [
    { name: "삭제", fn: "deleteFeed" },
    { name: "수정", fn: "editFeed" },
    { name: "다른 사람에게 좋아요 수 숨기기 취소", fn: "cancelHideLide" },
    { name: "댓글 기능 해제", fn: "cancelCommenting" },
    { name: "게시물로 이동", fn: "linkToFeed" },
    { name: "공유 대상...", fn: "shareTo" },
    { name: "링크 복사", fn: "copyLink" },
    { name: "퍼가기", fn: "scavenge" },
  ],
  OTHERS: [
    { name: "신고", fn: "sue" },
    { name: "팔로우 취소", fn: "cancelFollow" },
    { name: "즐겨찾기에 추가", fn: "add" },
    { name: "게시물로 이동", fn: "linkToFeed" },
    { name: "공유 대상...", fn: "shareTo" },
    { name: "링크 복사", fn: "copyLink" },
    { name: "퍼가기", fn: "scavenge" },
    { name: "이 계정 정보", fn: "feedInfo" },
  ],
};

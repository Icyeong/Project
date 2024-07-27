export const GNB_SHAPE = {
  ALL: "all",
  ICON_ONLY: "icon only",
  ICON_WITH_BOX: "icon with box",
} as const;
export type GnbShapeType = (typeof GNB_SHAPE)[keyof typeof GNB_SHAPE];

export const GNB_CONTENT = {
  SEARCH: "search",
} as const;
export type GnbContentType = (typeof GNB_CONTENT)[keyof typeof GNB_CONTENT];

import { UserProps } from "./user";

export interface FeedProps {
  feedId: string;
  username: string;
  img: string;
  createdAt: string;
  following: boolean;
  content: string;
  text: string;
  likes: number;
  comments: CommentInfoProps[];
  onSizeChange?: (size: number) => void;
}

export interface CommentInfoProps extends UserProps {
  comment: string;
  createdAt: string;
}

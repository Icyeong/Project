import { UserProps } from "./user";

export interface FeedProps extends UserProps {
  feedId: string;
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
  taggedUsers: UserProps[];
}

import { faker } from "@faker-js/faker";
import { v4 as uuidv4, v4 } from "uuid";
import { getRandomBoolean, getRandomNumber } from "@/_utils/utils";
import { createUser } from "./userDummy";
import { CommentInfoProps, FeedProps } from "@/_types/feed";
import { UserProps } from "@/_types/user";
import { random } from "lodash";

export function createFeeds(number: number) {
  const feedList = [];

  for (let i = 0; i < number; i++) {
    feedList.push({
      feedId: uuidv4(),
      userId: v4(),
      userName: faker.person.middleName(),
      userImg: faker.image.avatar(),
      createdAt: new Date().toISOString(),
      following: getRandomBoolean(),
      content: faker.image.urlLoremFlickr(),
      text: faker.lorem.paragraphs(5),
      likes: getRandomNumber(1000),
      comments: createComments(getRandomNumber(10)),
    });
  }

  return feedList;
}

export function createComments(number: number) {
  const commentList = [];

  for (let i = 0; i < number; i++) {
    commentList.push({
      ...createUser(1)[0],
      comment: faker.lorem.sentence({ min: 1, max: 5 }),
      createdAt: String(new Date()),
      taggedUsers: [],
    });
  }

  return commentList;
}

export const isFeedProps = (data: any): data is FeedProps => {
  return (
    typeof data.feedId === "string" &&
    typeof data.username === "string" &&
    typeof data.createdAt === "string" &&
    typeof data.following === "boolean" &&
    typeof data.content === "string" &&
    typeof data.text === "string" &&
    typeof data.likes === "number" &&
    Array.isArray(data.comments) &&
    data.comments.every((comment: any) => isCommentInfoProps(comment))
  );
};

export const isCommentInfoProps = (data: any): data is CommentInfoProps => {
  return (
    typeof data.comment === "string" &&
    typeof data.createdAt === "string" &&
    typeof data.userId === "string" &&
    typeof data.userName === "string" &&
    typeof data.userImg === "string" &&
    Array.isArray(data.taggedUsers) &&
    data.taggedUsers.every((user: UserProps) => isUserProps(user))
  );
};

export const isUserProps = (data: any): data is UserProps => {
  return typeof data.userId === "string" && typeof data.userName === "string" && typeof data.userImg === "string";
};

import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import { getRandomBoolean, getRandomNumber } from "@/_utils/utils";
import { FeedProps } from "@/_components/molecules/feed/Feed";

export function createFeeds(number: number) {
  const feedList = [];

  for (let i = 0; i < number; i++) {
    feedList.push({
      feedId: uuidv4(),
      username: faker.person.middleName(),
      img: faker.image.avatar(),
      createdAt: new Date().toISOString(),
      following: getRandomBoolean(),
      content: faker.image.urlLoremFlickr(),
      text: faker.lorem.paragraphs(5),
      likes: getRandomNumber(1000),
    });
  }

  return feedList;
}

export const isFeedProps = (data: any): data is FeedProps => {
  return (
    typeof data.feedId === "string" &&
    typeof data.username === "string" &&
    typeof data.createdAt === "string" &&
    typeof data.following === "boolean" &&
    typeof data.content === "string" &&
    typeof data.text === "string" &&
    typeof data.likes === "number"
  );
};

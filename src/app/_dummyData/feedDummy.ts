import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import { getRandomBoolean, getRandomNumber } from "../_utils/utils";

export function createFeeds(number: number) {
  const feedList = [];

  for (let i = 0; i < number; i++) {
    feedList.push({
      feedId: uuidv4(),
      username: faker.person.fullName(),
      createdAt: new Date().toISOString(),
      following: getRandomBoolean(),
      content: faker.image.urlLoremFlickr(),
      text: faker.lorem.paragraphs(5),
      likes: getRandomNumber(1000),
    });
  }

  return feedList;
}

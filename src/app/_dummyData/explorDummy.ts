import { faker } from "@faker-js/faker";
import { v4 } from "uuid";
import { getRandomNumber } from "@/_utils/utils";

export const createPhotoPiesces = (number: number) => {
  const pieceList = [];

  for (let i = 0; i < number; i++) {
    pieceList.push({
      id: v4(),
      likes: getRandomNumber(2000),
      comments: getRandomNumber(2000),
      img: faker.image.urlLoremFlickr(),
    });
  }

  return pieceList;
};

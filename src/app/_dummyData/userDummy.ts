import { faker } from "@faker-js/faker";
import { v4 } from "uuid";

export const createUser = (max: number) => {
  const user_list = [];

  for (let i = 0; i < max; i++) {
    user_list.push({
      userId: v4(),
      userName: faker.person.middleName(),
      userImg: faker.image.avatar(),
    });
  }

  return user_list;
};

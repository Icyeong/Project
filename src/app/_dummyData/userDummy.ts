import { faker } from "@faker-js/faker";

export const createStory = (max: number) => {
  const story_list = [];

  for (let i = 0; i < max; i++) {
    story_list.push({
      username: faker.person.fullName(),
      img: faker.image.avatar(),
    });
  }

  return story_list;
};

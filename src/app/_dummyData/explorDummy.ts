import { faker } from "@faker-js/faker";

export const PHOTO_PIECES = [
  {
    id: 1,
    likes: 132,
    comments: 32,
    img: faker.image.urlLoremFlickr(),
  },
  {
    id: 2,
    likes: 23,
    comments: 55,
    img: faker.image.urlLoremFlickr(),
  },
  {
    id: 3,
    likes: 234,
    comments: 876,
    img: faker.image.urlLoremFlickr(),
  },
  // {
  //   id: 4,
  //   likes: 53,
  //   comments: 6,
  //   img: faker.image.urlLoremFlickr(),
  // },
  // {
  //   id: 5,
  //   likes: 565,
  //   comments: 5,
  //   img: faker.image.urlLoremFlickr(),
  // },
  // {
  //   id: 6,
  //   likes: 1342,
  //   comments: 322,
  //   img: faker.image.urlLoremFlickr(),
  // },
];

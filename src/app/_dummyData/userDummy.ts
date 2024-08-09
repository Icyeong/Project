import { getRandomNumber } from "@/_utils/utils";
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

export const myInfoDetail = () => {
  const infoDetail = {
    nickName: faker.person.fullName({ sex: "female" }),
    introduction: "",
    gender: "female",
    followers: getRandomNumber(1000),
    following: getRandomNumber(1000),
  };
  return infoDetail;
};

export interface myinfoDetailProps {
  nickName: string;
  introduction: string;
  gender: string;
  followers: number;
  following: number;
}

export const isMyInfoDetailProps = (data: any): data is myinfoDetailProps => {
  return (
    typeof data.nickName === "string" &&
    typeof data.introduction === "string" &&
    typeof data.gender === "string" &&
    typeof data.followers === "number" &&
    typeof data.following === "number"
  );
};

import { faHouse, faSearch, faArrowRightFromBracket, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faMessage, faSquarePlus, faCompass } from "@fortawesome/free-regular-svg-icons";
import { faker } from "@faker-js/faker";

const TOP = [
  { name: "홈", href: "/", icon: faHouse },
  { name: "검색", href: "/#", icon: faSearch },
  { name: "탐색 탭", href: "/explore", icon: faCompass },
  { name: "메시지", href: "/message", icon: faMessage },
  { name: "만들기", href: "/create", icon: faSquarePlus },
  { name: "프로필", href: "/profile", img: faker.image.avatar() },
];

const BOTTOM = [
  { name: "모드 전환", href: "/mode", icon: faCircleHalfStroke },
  { name: "로그아웃", href: "/logout", icon: faArrowRightFromBracket },
];

export const GNB_NAV_LIST = {
  TOP,
  BOTTOM,
};

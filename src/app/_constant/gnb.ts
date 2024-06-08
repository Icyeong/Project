import { faHouse, faMessage, faMoon, faPlus, faSearch, faSignOut } from "@fortawesome/free-solid-svg-icons";

const TOP = [
  { name: "홈", href: "/", icon: faHouse },
  { name: "검색", href: "/#", icon: faSearch },
  { name: "탐색 탭", href: "/explore", icon: faHouse },
  { name: "메시지", href: "/message", icon: faMessage },
  { name: "만들기", href: "/create", icon: faPlus },
  { name: "프로필", href: "/profile", img: "imimg" },
];

const BOTTOM = [
  { name: "모드 전환", href: "/mode", icon: faMoon },
  { name: "로그아웃", href: "/logout", icon: faSignOut },
];

export const GNB_NAV_LIST = {
  TOP,
  BOTTOM,
};

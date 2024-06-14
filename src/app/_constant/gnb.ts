import { faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMessage, faCompass } from "@fortawesome/free-regular-svg-icons";

const TOP = [
  { name: "홈", href: "/", icon: faHouse },
  { name: "검색", href: "/#", icon: faSearch },
  { name: "탐색 탭", href: "/explore", icon: faCompass },
  { name: "메시지", href: "/message", icon: faMessage },
];

export const GNB_NAV_LIST = {
  TOP,
};

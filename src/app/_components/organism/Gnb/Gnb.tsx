"use client";
import React, { useCallback, useEffect, useState } from "react";
import { GnbStyle } from "./Gnb.style";
import Logo from "@components/atoms/common/Logo";
import NavLink from "@components/atoms/nav/NavLink";
import NavButton from "@components/atoms/nav/NavButton";
import { faArrowRightFromBracket, faCircleHalfStroke, faHouse, faSearch, faT } from "@fortawesome/free-solid-svg-icons";
import { faCompass, faMessage, faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import useModalStore from "@/_stores/client/modalStore";
import { MODAL } from "@/_constant/modal";
import { useCustomMutation } from "@/_hooks/useFetch";
import { deleteCookie } from "cookies-next";
import useAuthStore from "@/_stores/client/authStore";
import { useRouter } from "next/navigation";
import { AuthService } from "@/_services/auth_service";
import { GNB_SHAPE, GnbShapeType } from "@/_constant/gnb";
import classNames from "classnames";
import GnbContentBox from "../gnbContentBox/GnbContentBox";
import SearchContent from "../gnbContent/SearchContent";

function Gnb() {
  const [gnbShape, setGnbShape] = useState<GnbShapeType>(GNB_SHAPE.ALL);
  const [gnbBoxActive, setGnbBoxActive] = useState(false);
  const { resetAuthState, userImg } = useAuthStore();
  const { openModal, setModal } = useModalStore();

  const router = useRouter();

  const handlePostClick = useCallback(() => {
    setModal(MODAL.POST_FEED);
    openModal();
  }, [setModal, openModal]);

  const handleSearchClick = useCallback(() => {
    if (gnbShape === GNB_SHAPE.ALL) {
      setGnbShape(GNB_SHAPE.ICON_WITH_BOX);
    } else {
      setGnbShape(GNB_SHAPE.ALL);
    }
  }, [gnbShape]);

  const handleTestModalClick = useCallback(() => {
    setModal(MODAL.TEST);
    openModal();
  }, [setModal, openModal]);

  const handleModeChangeClick = useCallback(() => {}, []);
  const handleTestClick = useCallback(() => {}, []);

  const { mutate: logOut } = useCustomMutation(async () => AuthService.LogOut, {
    onSuccess: () => {
      deleteCookie("accessToken");
      resetAuthState();
      router.push("/login");
    },
    onError: (error) => {
      console.log("signout error : ", error);
    },
  });

  const handleLogOutClick = useCallback(() => {
    logOut(null);
  }, [logOut]);

  useEffect(() => {
    if (gnbShape === GNB_SHAPE.ICON_WITH_BOX) {
      setGnbBoxActive(true);
    } else {
      setGnbBoxActive(false);
    }
  }, [gnbShape, setGnbBoxActive]);

  return (
    <GnbStyle.Wrapper>
      <GnbStyle.NavContainer
        className={classNames([
          { icon: gnbShape === GNB_SHAPE.ICON_ONLY },
          { iconWithBox: gnbShape === GNB_SHAPE.ICON_WITH_BOX },
        ])}
      >
        <Logo gnbShape={gnbShape} />
        <GnbStyle.Top>
          <NavLink name="홈" href="/" icon={faHouse} />
          <NavButton name="검색" icon={faSearch} onClick={handleSearchClick} />
          <NavLink name="탐색 탭" href="/explore" icon={faCompass} />
          <NavLink name="메시지" href="/message" icon={faMessage} />
          <NavButton name="만들기" icon={faSquarePlus} onClick={handlePostClick} />
          <NavButton name="프로필" img={userImg} onClick={handleTestModalClick} />
        </GnbStyle.Top>
        <GnbStyle.Bottom>
          <NavButton name="모드 전환" icon={faCircleHalfStroke} onClick={handleModeChangeClick} />
          <NavButton name="로그아웃" icon={faArrowRightFromBracket} onClick={handleLogOutClick} />
          <NavButton name="테스트" icon={faT} onClick={handleTestClick} />
        </GnbStyle.Bottom>
      </GnbStyle.NavContainer>
      <GnbContentBox isActive={gnbBoxActive}>
        {/* test */}
        <SearchContent />
      </GnbContentBox>
    </GnbStyle.Wrapper>
  );
}

export default React.memo(Gnb);

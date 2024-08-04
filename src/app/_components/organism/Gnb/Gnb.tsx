"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { GNB_CONTENT, GNB_SHAPE, GnbContentType, GnbShapeType } from "@/_constant/gnb";
import classNames from "classnames";
import GnbContentBox from "../gnbContentBox/GnbContentBox";
import SearchContent from "../SearchContent/SearchContent";
import useFeedStore from "@/_stores/client/feedStore";
import { useOutsideClick } from "@/_hooks/useOutsideClick";

function Gnb() {
  const [gnbShape, setGnbShape] = useState<GnbShapeType>(GNB_SHAPE.ALL);
  const [gnbContent, setGnbContent] = useState<GnbContentType | null>(null);
  const { resetAuthState, userInfo } = useAuthStore();
  const { resetFeedState } = useFeedStore();
  const { resetModalState } = useModalStore();
  const { openModal, closeModal, setModal } = useModalStore();

  const gnbRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handlePostClick = useCallback(() => {
    setModal(MODAL.POST_FEED);
    openModal();
  }, [setModal, openModal]);

  const handleProfileClick = () => {
    router.push(`/${userInfo.userName}`);
  };

  const handleSearchClick = useCallback(() => {
    setGnbContent(GNB_CONTENT.SEARCH);
    setGnbShape((prev) => (prev === GNB_SHAPE.ALL ? GNB_SHAPE.ICON_WITH_BOX : GNB_SHAPE.ALL));
  }, [gnbShape]);

  const handleTestModalClick = useCallback(() => {
    setModal(MODAL.TEST);
    openModal();
  }, [setModal, openModal]);

  const handleModeChangeClick = useCallback(() => {}, []);
  const handleTestClick = useCallback(() => {
    router.replace("/p/hello");
    setModal(MODAL.FEED);
    openModal();
  }, []);

  const { mutate: mutateLogOut } = useCustomMutation(async () => AuthService.LogOut, {
    onSuccess: () => {
      deleteCookie("accessToken");
      resetAuthState();
      resetFeedState();
      resetModalState();
      router.push("/login");
    },
    onError: (error) => {
      console.log("signout error : ", error);
    },
  });

  const handleLogOutClick = useCallback(() => {
    mutateLogOut(null);
  }, [mutateLogOut]);

  const { handleOutsideClick } = useOutsideClick(gnbRef, () => {
    setGnbShape(GNB_SHAPE.ALL);
  });

  const getGnbContent = () => {
    switch (gnbContent) {
      case "search":
        return <SearchContent />;
      default:
        return null;
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      closeModal();
    };
  }, []);

  return (
    <GnbStyle.Wrapper ref={gnbRef}>
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
          <NavButton name="프로필" img={userInfo.userImg} onClick={handleProfileClick} />
        </GnbStyle.Top>
        <GnbStyle.Bottom>
          <NavButton name="모드 전환" icon={faCircleHalfStroke} onClick={handleModeChangeClick} />
          <NavButton name="로그아웃" icon={faArrowRightFromBracket} onClick={handleLogOutClick} />
          <NavButton name="테스트" icon={faT} onClick={handleTestClick} />
        </GnbStyle.Bottom>
        <GnbContentBox gnbShape={gnbShape}>{getGnbContent()}</GnbContentBox>
      </GnbStyle.NavContainer>
    </GnbStyle.Wrapper>
  );
}

export default React.memo(Gnb);

"use client";
import React, { useCallback } from "react";
import { GnbStyle } from "./Gnb.style";
import Logo from "@components/atoms/common/Logo";
import { GNB_NAV_LIST } from "@/_constant/gnb";
import NavLink from "@components/atoms/nav/NavLink";
import NavButton from "@components/atoms/nav/NavButton";
import { faArrowRightFromBracket, faCircleHalfStroke, faT } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import useModalStore from "@/_stores/client/modalStore";
import { MODAL } from "@/_constant/modal";
import { useCustomMutation } from "@/_hooks/useFetch";
import { deleteCookie } from "cookies-next";
import useAuthStore from "@/_stores/client/authStore";
import { useRouter } from "next/navigation";
import { AuthService } from "@/_services/auth_service";

function Gnb() {
  const { resetAuthState, userImg } = useAuthStore();
  const { openModal, setModal } = useModalStore();

  const router = useRouter();

  const handlePostClick = useCallback(() => {
    setModal(MODAL.POST_FEED);
    openModal();
  }, [setModal, openModal]);

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

  return (
    <GnbStyle.Wrapper>
      <Logo />
      <GnbStyle.Top>
        {GNB_NAV_LIST.TOP.map((nav) => (
          <NavLink key={nav.name} name={nav.name} href={nav.href} icon={nav.icon} />
        ))}
        <NavButton name="만들기" icon={faSquarePlus} onClick={handlePostClick} />
        <NavButton name="프로필" img={userImg} onClick={handleTestModalClick} />
      </GnbStyle.Top>
      <GnbStyle.Bottom>
        <NavButton name="모드 전환" icon={faCircleHalfStroke} onClick={handleModeChangeClick} />
        <NavButton name="로그아웃" icon={faArrowRightFromBracket} onClick={handleLogOutClick} />
        <NavButton name="테스트" icon={faT} onClick={handleTestClick} />
      </GnbStyle.Bottom>
    </GnbStyle.Wrapper>
  );
}

export default React.memo(Gnb);

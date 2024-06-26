"use client";
import React, { useEffect, useState } from "react";
import { GnbStyle } from "./Gnb.style";
import Logo from "@components/atoms/common/Logo";
import { GNB_NAV_LIST } from "@/_constant/gnb";
import NavLink from "@components/atoms/nav/NavLink";
import NavButton from "@components/atoms/nav/NavButton";
import { faArrowRightFromBracket, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faker } from "@faker-js/faker";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import useModalStore from "@/_stores/client/modalStore";
import { MODAL_NAME } from "@/_constant/modal";
import { useCustomMutation } from "@/_hooks/useFetch";
import { deleteCookie } from "cookies-next";
import useAuthStore from "@/_stores/client/authStore";
import { useRouter } from "next/navigation";
import { AuthService } from "@/_services/auth_service";

export default function Gnb() {
  const [avatar, setAvater] = useState("");
  const { resetAuthState } = useAuthStore();
  const { openModal, setModal } = useModalStore();

  const router = useRouter();

  const handlePostClick = () => {
    setModal(MODAL_NAME.POST_FEED);
    openModal();
  };

  const handleTestClick = () => {
    setModal(MODAL_NAME.TEST);
    openModal();
  };

  const handleModeChangeClick = () => {};

  const { mutate: logOutMutation } = useCustomMutation(async () => AuthService.LogOut, {
    onSuccess: () => {
      deleteCookie("accessToken");
      resetAuthState();
      router.push("/login");
    },
    onError: (error) => {
      console.log("signout error : ", error);
    },
  });

  const handleLogOutClick = async () => {
    logOutMutation(null);
  };

  useEffect(() => {
    const profileImg = faker.image.avatar();
    setAvater(profileImg);
  }, []);
  return (
    <GnbStyle.Wrapper>
      <Logo />
      <GnbStyle.Top>
        {GNB_NAV_LIST.TOP.map((nav) => (
          <NavLink key={nav.name} name={nav.name} href={nav.href} icon={nav.icon} />
        ))}
        <NavButton name="만들기" icon={faSquarePlus} onClick={handlePostClick} />
        <NavButton name="프로필" img={avatar} onClick={handleTestClick} />
      </GnbStyle.Top>
      <GnbStyle.Bottom>
        <NavButton name="모드 전환" icon={faCircleHalfStroke} onClick={handleModeChangeClick} />
        <NavButton name="로그아웃" icon={faArrowRightFromBracket} onClick={handleLogOutClick} />
      </GnbStyle.Bottom>
    </GnbStyle.Wrapper>
  );
}

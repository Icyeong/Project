"use client";
import React, { useEffect, useState } from "react";
import { GnbStyle } from "./Gnb.style";
import Logo from "../../atoms/common/Logo";
import { GNB_NAV_LIST } from "@/app/_constant/gnb";
import NavLink from "../../atoms/nav/NavLink";
import NavButton from "../../atoms/nav/NavButton";
import { faArrowRightFromBracket, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faker } from "@faker-js/faker";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import useModalStore from "@/app/_stores/client/modalStore";
import { MODAL_NAME } from "@/app/_constant/modal";
import { useCustomMutation } from "@/app/_hooks/useFetch";
import { QUERY_KEYS } from "@/app/_stores/server/queryKeys";
import { deleteCookie } from "cookies-next";
import useAuthStore from "@/app/_stores/client/authStore";
import { useRouter } from "next/navigation";
import { authErrorHandler } from "@/app/_utils/authErrorHandler";

export default function Gnb() {
  const [avatar, setAvater] = useState("");
  const { resetAuthState } = useAuthStore();
  const { setIsActive, setModal } = useModalStore();

  const router = useRouter();

  const handlePostClick = () => {
    setModal(MODAL_NAME.POST_FEED);
    setIsActive(true);
  };

  const handleTestClick = () => {
    setModal(MODAL_NAME.TEST);
    setIsActive(true);
  };

  const handleModeChangeClick = () => {};

  const signOutService = useCustomMutation(
    QUERY_KEYS.AUTH.SIGNOUT.queryKey,
    QUERY_KEYS.AUTH.SIGNOUT.queryFn,
    () => {
      console.log("logout querykey : ", QUERY_KEYS.AUTH.SIGNOUT.queryKey);
      deleteCookie("accessToken");
      resetAuthState();
      router.push("/login");
    },
    (error: any) => {
      const { message } = authErrorHandler(error);
      alert(message);
    },
  );

  const handleSignOutClick = async () => {
    signOutService.mutate();
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
        <NavButton name="로그아웃" icon={faArrowRightFromBracket} onClick={handleSignOutClick} />
      </GnbStyle.Bottom>
    </GnbStyle.Wrapper>
  );
}

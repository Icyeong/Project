"use client";
import React from "react";
import { GnbStyle } from "./Gnb.style";
import Logo from "../../atoms/common/Logo";
import { GNB_NAV_LIST } from "@/app/_constant/gnb";
import NavLink from "../../atoms/nav/NavLink";
import NavButton from "../../atoms/nav/NavButton";
import { faArrowRightFromBracket, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faker } from "@faker-js/faker";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import useSignOut from "@/app/_hooks/useSingOut";

export default function Gnb() {
  const { signOutService } = useSignOut();

  const handleModeChangeClick = () => {};

  const handleSignOutClick = async () => {
    signOutService.mutate();
  };
  return (
    <GnbStyle.Wrapper>
      <Logo />
      <GnbStyle.Top>
        {GNB_NAV_LIST.TOP.map((nav) => (
          <NavLink key={nav.name} name={nav.name} href={nav.href} icon={nav.icon} />
        ))}
        <NavButton name="만들기" icon={faSquarePlus} onClick={handleSignOutClick} />
        <NavButton name="프로필" img={faker.image.avatar()} onClick={handleSignOutClick} />
      </GnbStyle.Top>
      <GnbStyle.Bottom>
        <NavButton name="모드 전환" icon={faCircleHalfStroke} onClick={handleModeChangeClick} />
        <NavButton name="로그아웃" icon={faArrowRightFromBracket} onClick={handleSignOutClick} />
      </GnbStyle.Bottom>
    </GnbStyle.Wrapper>
  );
}

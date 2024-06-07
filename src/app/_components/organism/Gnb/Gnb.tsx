"use client";
import React from "react";
import { GnbStyle } from "./Gnb.style";
import Logo from "../../atoms/common/Logo";
import Nav from "../../atoms/nav/Nav";
import { GNB_NAV_LIST } from "@/app/_constant/gnb";

export default function Gnb() {
  return (
    <GnbStyle.Wrapper>
      <Logo />
      <GnbStyle.Top>
        {GNB_NAV_LIST.TOP.map((nav) => (
          <Nav name={nav.name} href={nav.href} icon={nav.icon} />
        ))}
      </GnbStyle.Top>
      <GnbStyle.Bottom>
        {GNB_NAV_LIST.BOTTOM.map((nav) => (
          <Nav name={nav.name} href={nav.href} icon={nav.icon} />
        ))}
      </GnbStyle.Bottom>
    </GnbStyle.Wrapper>
  );
}

"use client";
import Gnb from "@components/organism/Gnb/Gnb";
import { HomeLayoutStyle } from "@/_styles/common.style";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HomeLayoutStyle.Layout>
      <Gnb />
      {children}
    </HomeLayoutStyle.Layout>
  );
}

"use client";
import Gnb from "@/app/_components/organism/Gnb/Gnb";
import { HomeLayoutStyle } from "@/app/_styles/common.style";

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

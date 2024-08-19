"use client";
import Gnb from "@components/organism/Gnb/Gnb";
import { HomeLayoutStyle } from "@/_styles/common.style";
import { usePathname } from "next/navigation";

const noGnbPages = ["/stories"];

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname() || "";
  const showGnb = !noGnbPages.some((page) => pathname.startsWith(page));
  return (
    <HomeLayoutStyle.Layout>
      {showGnb && <Gnb />}
      {children}
    </HomeLayoutStyle.Layout>
  );
}

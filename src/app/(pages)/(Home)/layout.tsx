import Gnb from "@/app/_components/organism/Gnb/Gnb";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Gnb />
      {children}
    </>
  );
}

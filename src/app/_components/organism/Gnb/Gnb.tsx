"use client";
import React from "react";
import { GnbStyle } from "./Gnb.style";
import Logo from "@components/atoms/common/Logo";
import { GNB_NAV_LIST } from "@/_constant/gnb";
import NavLink from "@components/atoms/nav/NavLink";
import NavButton from "@components/atoms/nav/NavButton";
import { faArrowRightFromBracket, faCircleHalfStroke, faT } from "@fortawesome/free-solid-svg-icons";
import { faker } from "@faker-js/faker";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import useModalStore from "@/_stores/client/modalStore";
import { MODAL } from "@/_constant/modal";
import { useCustomMutation } from "@/_hooks/useFetch";
import { deleteCookie } from "cookies-next";
import useAuthStore from "@/_stores/client/authStore";
import { useRouter } from "next/navigation";
import { AuthService } from "@/_services/auth_service";
import { FeedService } from "@/_services/feed_service";
import { useQueryClient } from "@tanstack/react-query";
import { FeedProps } from "@/_components/molecules/feed/Feed";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { v4 } from "uuid";

export default function Gnb() {
  const { resetAuthState, userImg } = useAuthStore();
  const { openModal, setModal } = useModalStore();

  const router = useRouter();

  const handlePostClick = () => {
    setModal(MODAL.POST_FEED);
    openModal();
  };

  const handleTestModalClick = () => {
    setModal(MODAL.TEST);
    openModal();
  };

  const handleModeChangeClick = () => {};

  const queryClient = useQueryClient();
  const { mutate: createFeed } = useCustomMutation(FeedService.postFeed, {
    onSuccess: (data: FeedProps) => {
      queryClient.setQueryData(QUERY_KEYS.FEED.LIST.queryKey, (oldData: FeedProps[]) => {
        console.log("oldData : ", oldData);
        const updatedList = [...oldData, { ...data, createdAt: new Date().toISOString() }];
        updatedList.sort(
          (a: FeedProps, b: FeedProps) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        return updatedList;
      });

      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
  });
  const handleTestClick = () => {
    createFeed({
      content: faker.image.urlLoremFlickr(),
      createdAt: "",
      feedId: v4(),
      following: false,
      likes: 0,
      text: "szzzz",
      username: "qq@qq.com",
    });
  };

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

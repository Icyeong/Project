"use client";
import EditProfileForm from "@/_components/organism/form/EditProfileForm";
import { HomeLayoutStyle } from "@/_styles/common.style";

export default function EditProfileTemplate() {
  return (
    <HomeLayoutStyle.Container>
      <HomeLayoutStyle.Main>
        <EditProfileForm />
      </HomeLayoutStyle.Main>
    </HomeLayoutStyle.Container>
  );
}

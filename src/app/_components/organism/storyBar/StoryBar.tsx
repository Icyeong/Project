import React from "react";
import { StoryStyle } from "./StoryBar.style";
import User from "../../molecules/user/User";
import { STORY_USERS } from "@/app/_dummyData/userDummy";

export default function StoryBar() {
  return (
    <StoryStyle.Container>
      {STORY_USERS.map((user) => (
        <User key={user.username} {...user} />
      ))}
    </StoryStyle.Container>
  );
}

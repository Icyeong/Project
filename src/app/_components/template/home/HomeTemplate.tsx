import { HomeLayoutStyle } from "@/_styles/common.style";
import StoryBar from "@components/organism/storyBar/StoryBar";
import FeedList from "@components/organism/feedlist/FeedList";
import RecommendedUsers from "@components/molecules/recommendedUsers/RecommendedUsers";

export default function HomeTemplate() {
  return (
    <HomeLayoutStyle.Container>
      <HomeLayoutStyle.Main>
        <StoryBar />
        <FeedList />
      </HomeLayoutStyle.Main>
      <HomeLayoutStyle.SideSection>
        <RecommendedUsers />
      </HomeLayoutStyle.SideSection>
    </HomeLayoutStyle.Container>
  );
}

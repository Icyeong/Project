import ScrollBox from "@/_components/atoms/scrollBox/ScrollBox";
import { Search } from "./SearchContent.style";
import SearchInput from "@/_components/atoms/searchInput/SearchInput";
import UserBar from "@/_components/molecules/userbar/UserBar";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { useCustomMutation } from "@/_hooks/useFetch";
import { FeedService } from "@/_services/feed_service";
import useFeedStore from "@/_stores/client/feedStore";
import { UserProps } from "@/_types/user";

export default function SearchContent() {
  const [keyword, setKeyword] = useState("");
  const { searchHistory } = useFeedStore();

  const handleTextChange = useCallback(
    debounce(
      (e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value.trim());
      },
      500,
      { leading: false, trailing: true },
    ),
    [setKeyword],
  );

  const { mutate: mutateSearchKeyword, data } = useCustomMutation((keyword: string) =>
    FeedService.getSearchedResults(keyword),
  );

  useEffect(() => {
    if (keyword.length > 0) {
      mutateSearchKeyword(keyword);
    }
  }, [keyword, mutateSearchKeyword]);

  const getRenderStatus = () => {
    if (keyword && data?.length) return "searchResult";
    if (!keyword && searchHistory.length) return "searchHistory";
    if (!keyword && searchHistory.length === 0) return "noHistory";
    if (keyword && !data?.length) return "noResult";
    return null;
  };

  const renderContent = () => {
    const renderStatus = getRenderStatus();

    switch (renderStatus) {
      case "searchResult":
        return data?.map((user: UserProps) => <UserBar key={user.userId} user={user} />);
      case "searchHistory":
        return searchHistory.map((user) => <UserBar key={user.userId} user={user} deleteButton={true} />);
      case "noHistory":
        return (
          <Search.EmptyContent>
            <span>최근 검색 항목</span>
            <p>최근 검색 내역 없음.</p>
          </Search.EmptyContent>
        );
      case "noResult":
        return (
          <Search.EmptyContent>
            <p>검색 결과가 없습니다.</p>
          </Search.EmptyContent>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <Search.Head>
        <Search.Title>검색</Search.Title>
        <SearchInput onChange={handleTextChange} />
      </Search.Head>
      <ScrollBox>{renderContent()}</ScrollBox>
    </>
  );
}

import ScrollBox from "@/_components/atoms/scrollBox/ScrollBox";
import { Search } from "./SearchContent.style";
import SearchInput from "@/_components/atoms/searchInput/SearchInput";
import UserBar from "@/_components/molecules/userbar/UserBar";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { useCustomMutation } from "@/_hooks/useFetch";
import { FeedService } from "@/_services/feed_service";
import { UserProps } from "@/_components/molecules/user/User";
import useFeedStore from "@/_stores/client/feedStore";

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

  const { mutate: SearchKeyword, data } = useCustomMutation((keyword: string) =>
    FeedService.getSearchedResults(keyword),
  );

  useEffect(() => {
    if (keyword.length > 0) {
      SearchKeyword(keyword);
    }
  }, [keyword]);
  return (
    <>
      <Search.Head>
        <Search.Title>검색</Search.Title>
        <SearchInput onChange={handleTextChange} />
      </Search.Head>
      <ScrollBox>
        {keyword && data?.length ? (
          data.map((user: UserProps) => <UserBar key={user.userId} user={user} />)
        ) : (
          <Search.EmptyContent>
            {!keyword &&
              searchHistory.length > 0 &&
              searchHistory.map((user) => <UserBar key={user.userId} user={user} deleteButton={true} />)}
            {!keyword && searchHistory.length === 0 && (
              <>
                <span>최근 검색 항목</span>
                <p>최근 검색 내역 없음.</p>
              </>
            )}
            {keyword && !data?.length && <p>검색 결과가 없습니다.</p>}
          </Search.EmptyContent>
        )}
      </ScrollBox>
    </>
  );
}

import ScrollBox from "@/_components/atoms/scrollBox/ScrollBox";
import { Search } from "./SearchContent.style";
import SearchInput from "@/_components/atoms/searchInput/SearchInput";
import UserBar from "@/_components/molecules/userbar/UserBar";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { useCustomMutation } from "@/_hooks/useFetch";
import { FeedService } from "@/_services/feed_service";
import { UserProps } from "@/_components/molecules/user/User";

export default function SearchContent() {
  const [keyword, setKeyword] = useState("");

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
          // 검색결과 데이터 작업중(수정필요)
          data.map((item: UserProps) => <UserBar key={item.userId} {...item} />)
        ) : (
          <Search.EmptyContent>
            {!keyword && (
              <>
                <span>최근 검색 항목</span>
                <p>최근 검색 내역 없음.</p>
                {/* 최근 검색 내역 작업 필요 */}
              </>
            )}
            {keyword && !data?.length && <p>검색 결과가 없습니다.</p>}
          </Search.EmptyContent>
        )}
      </ScrollBox>
    </>
  );
}

"use client";
import { useCallback, useEffect, useMemo, useRef } from "react";
import PhotoSet from "@components/molecules/photoSet/PhotoSet";
import PhotoListSkeleton from "./PhotoListSkeleton";
import { useVirtualizer } from "@tanstack/react-virtual";
import debounce from "lodash/debounce";
import { FeedProps } from "@/_types/feed";
import { isArrNotEmpty } from "@/_utils/utils";
import NoPostBox from "./NoPostBox";

export default function PhotoList({ fetchNextPage, data, isLoading }: any) {
  const parentRef = useRef<HTMLDivElement | null>(null);

  const handleFetchNextPage = useCallback(debounce(fetchNextPage, 300, { leading: false, trailing: true }), [
    fetchNextPage,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      if (clientHeight + scrollTop > scrollHeight - 200) {
        handleFetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleFetchNextPage.cancel();
    };
  }, [fetchNextPage]);

  const allPhotos = useMemo(() => data?.pages.flatMap((page: any) => page.feeds) || [], [data]);

  const chunkedData: FeedProps[][] = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < allPhotos.length; i += 3) {
      chunks.push(allPhotos.slice(i, i + 3));
    }
    return chunks;
  }, [allPhotos]);

  const rowVirtualizer = useVirtualizer({
    count: chunkedData.length,
    getScrollElement: useCallback(() => parentRef.current, []),
    estimateSize: () => 315,
  });

  if (isLoading) return <PhotoListSkeleton />;
  if (!isArrNotEmpty(allPhotos)) return <NoPostBox />;

  return (
    <div ref={parentRef} style={{ height: `${rowVirtualizer.getTotalSize()}px`, width: "100%", position: "relative" }}>
      {rowVirtualizer.getVirtualItems().map((virtualItem) => {
        const chunk = chunkedData[virtualItem.index];
        return (
          <div
            key={virtualItem.index}
            style={{
              top: 0,
              left: 0,
              height: `0`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            <PhotoSet pieces={chunk} />
          </div>
        );
      })}
    </div>
  );
}

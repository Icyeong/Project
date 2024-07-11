"use client";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import PhotoSet from "@components/molecules/photoSet/PhotoSet";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { FeedService } from "@/_services/feed_service";
import { PhotoPieceProps } from "@components/atoms/photoPiece/PhotoPiece";
import PhotoListSkeleton from "./PhotoListSkeleton";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import debounce from "lodash/debounce";

export default function PhotoList() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const { fetchNextPage, data, isLoading } = useInfiniteQuery({
    queryKey: QUERY_KEYS.FEED.PHOTO_PIECES.queryKey,
    queryFn: ({ pageParam = 0 }) => FeedService.getPhotoPieces(pageParam),
    gcTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
  });

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

  const allPhotos = useMemo(() => data?.pages.flatMap((page) => page.photos) || [], [data]);

  const chunkedData: PhotoPieceProps[][] = useMemo(() => {
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

  return (
    <div ref={parentRef} style={{ height: `${rowVirtualizer.getTotalSize()}px`, width: "100%", position: "relative" }}>
      {rowVirtualizer.getVirtualItems().map((virtualItem) => {
        console.log("virtualItem : ", virtualItem);
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

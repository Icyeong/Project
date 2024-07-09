"use client";
import React, { useEffect, useRef } from "react";
import { List } from "./PhotoList.style";
import PhotoSet from "@components/molecules/photoSet/PhotoSet";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { FeedService } from "@/_services/feed_service";
import { PhotoPieceProps } from "@components/atoms/photoPiece/PhotoPiece";
import PhotoListSkeleton from "./PhotoListSkeleton";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";

export default function PhotoList() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const { fetchNextPage, data, isLoading, hasNextPage } = useInfiniteQuery({
    queryKey: QUERY_KEYS.FEED.PHOTO_PIECES.queryKey,
    queryFn: ({ pageParam = 0 }) => FeedService.getPhotoPieces(pageParam),
    gcTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      if (clientHeight + scrollTop > scrollHeight - 200) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  const rowVirtualizer = useVirtualizer({
    count: data?.pages.flatMap((page) => page.photos).length ?? 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 310,
  });

  if (isLoading) return <PhotoListSkeleton />;

  return (
    <List.Container
      ref={parentRef}
      style={{ height: `${rowVirtualizer.getTotalSize()}px`, width: "100%", position: "relative" }}
    >
      .{/* 안에 내용을 적지않으면 렌더링이 되지 않음. */}
      {rowVirtualizer.getVirtualItems().map((virtualItem) => {
        const allPhotos = data?.pages.flatMap((page) => page.photos) || [];

        const chunkedData = [];
        for (let i = 0; i < allPhotos.length; i += 3) {
          chunkedData.push(allPhotos.slice(i, i + 3));
        }

        return (
          <>
            {chunkedData.map((chunk: PhotoPieceProps[], idx) => (
              <PhotoSet
                key={virtualItem.key}
                // style={{
                //   position: "absolute",
                //   top: 0,
                //   left: 0,
                //   width: "100%",
                //   height: `${virtualItem.size}px`,
                //   transform: `translateY(${virtualItem.start}px)`,
                // }}
                pieces={chunk}
              />
            ))}
          </>
        );
      })}
      {/* {chunkedData.map((chunk: PhotoPieceProps[], idx) => (
          <PhotoSet key={idx} pieces={chunk} />
        ))} */}
    </List.Container>
  );
}

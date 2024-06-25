"use client";
import React from "react";
import { List } from "./PhotoList.style";
import PhotoSet from "../../molecules/photoSet/PhotoSet";
import { useCustomQuery } from "@/app/_hooks/useFetch";
import { QUERY_KEYS } from "@/app/_stores/server/queryKeys";
import { FeedService } from "@/app/_services/feed_service";
import { PhotoPieceProps } from "../../atoms/photoPiece/PhotoPiece";
import PhotoListSkeleton from "./PhotoListSkeleton";

export default function PhotoList() {
  const { data, isLoading } = useCustomQuery(QUERY_KEYS.FEED.PHOTO_PIECES.queryKey, FeedService.getPhotoPieces);

  if (isLoading) return <PhotoListSkeleton />;

  if (data && !isLoading) {
    const chunkedData = [];
    for (let i = 0; i < data.length; i += 3) {
      chunkedData.push(data.slice(i, i + 3));
    }
    return (
      <List.Container>
        {chunkedData.map((chunk: PhotoPieceProps[]) => (
          <PhotoSet pieces={chunk} />
        ))}
      </List.Container>
    );
  }
}

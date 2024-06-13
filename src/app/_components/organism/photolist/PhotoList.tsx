"use client";
import React from "react";
import { List } from "./PhotoList.style";
import PhotoSet from "../../molecules/photoSet/PhotoSet";

export default function PhotoList() {
  const PPHOTO_PIECES = [
    {
      id: 1,
      likes: 132,
      comments: 32,
    },
    {
      id: 2,
      likes: 23,
      comments: 55,
    },
    {
      id: 3,
      likes: 234,
      comments: 876,
    },
    {
      id: 4,
      likes: 53,
      comments: 6,
    },
    {
      id: 5,
      likes: 565,
      comments: 5,
    },
    {
      id: 6,
      likes: 1342,
      comments: 322,
    },
  ];
  return (
    <List.Container>
      <PhotoSet />
      <PhotoSet />
      <PhotoSet />
      <PhotoSet />
      <PhotoSet />
    </List.Container>
  );
}

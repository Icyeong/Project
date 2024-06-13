import React from "react";
import { Piece } from "./PhotoPiece.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

interface PhotoPieceProps {
  id: number;
  likes: number;
  comments: number;
  img: string;
}

export default function PhotoPiece({ id, likes, comments, img }: PhotoPieceProps) {
  const handleOpenClick = () => {};
  return (
    <Piece.Button value={id} img={img} onClick={handleOpenClick}>
      <Piece.Cover>
        <Piece.Count>
          <FontAwesomeIcon icon={faHeart} />
          {likes}
        </Piece.Count>
        <Piece.Count>
          <FontAwesomeIcon icon={faComment} />
          {comments}
        </Piece.Count>
      </Piece.Cover>
    </Piece.Button>
  );
}

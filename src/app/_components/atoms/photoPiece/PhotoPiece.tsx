import React from "react";
import { Piece } from "./PhotoPiece.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function PhotoPiece() {
  return (
    <Piece.Button>
      <Piece.Cover>
        <Piece.Count>
          <FontAwesomeIcon icon={faHeart} />
          2134
        </Piece.Count>
        <Piece.Count>
          <FontAwesomeIcon icon={faComment} />
          345
        </Piece.Count>
      </Piece.Cover>
    </Piece.Button>
  );
}

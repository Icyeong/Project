import React from "react";
import { Container } from "./PhotoSet.style";
import PhotoPiece from "../../atoms/photoPiece/PhotoPiece";
import { PHOTO_PIECES } from "@/app/_dummyData/explorDummy";

export default function PhotoSet() {
  return (
    <Container>
      {PHOTO_PIECES.map((piece) => (
        <PhotoPiece key={piece.id} {...piece} />
      ))}
    </Container>
  );
}

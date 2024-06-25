import React from "react";
import { Container } from "./PhotoSet.style";
import PhotoPiece, { PhotoPieceProps } from "../../atoms/photoPiece/PhotoPiece";

export default function PhotoSet({ pieces }: { pieces: PhotoPieceProps[] }) {
  return (
    <Container>
      {pieces.map((piece: PhotoPieceProps) => (
        <PhotoPiece key={piece.id} {...piece} />
      ))}
    </Container>
  );
}

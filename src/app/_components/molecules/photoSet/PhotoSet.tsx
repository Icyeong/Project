import React from "react";
import { Container } from "./PhotoSet.style";
import PhotoPiece from "../../atoms/photoPiece/PhotoPiece";

export default function PhotoSet() {
  return (
    <Container>
      <PhotoPiece />
      <PhotoPiece />
      <PhotoPiece />
    </Container>
  );
}

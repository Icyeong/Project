import styled from "styled-components";
import { List } from "./PhotoList.style";
import { Container } from "@components/molecules/photoSet/PhotoSet.style";
import { Piece } from "@components/atoms/photoPiece/PhotoPiece.style";
import { SkeletonAni } from "@/_styles/common.style";

export const Skeleton = {
  Container: styled(List.Container)``,
  Row: styled(Container)``,
  Piece: styled(Piece.Button)`
    animation: ${SkeletonAni} infinite alternate 1s;
    background-color: #cfcfcf;
  `,
};

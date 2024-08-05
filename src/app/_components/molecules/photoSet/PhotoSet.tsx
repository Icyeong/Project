import { Container } from "./PhotoSet.style";
import PhotoPiece from "@components/atoms/photoPiece/PhotoPiece";
import { FeedProps } from "@/_types/feed";

export default function PhotoSet({ pieces }: { pieces: FeedProps[] }) {
  return <Container>{pieces?.map((piece: FeedProps) => <PhotoPiece key={piece.feedId} {...piece} />)}</Container>;
}

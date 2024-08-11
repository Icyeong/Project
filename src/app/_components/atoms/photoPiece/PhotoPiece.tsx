import { Piece } from "./PhotoPiece.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FeedProps } from "@/_types/feed";
import useModalStore from "@/_stores/client/modalStore";
import { MODAL } from "@/_constant/modal";

export default function PhotoPiece({ feedId, userId, likes, comments, content }: FeedProps) {
  const { setModal } = useModalStore();
  const handleShowFeed = () => {
    window.history.pushState({}, "", `/p/${feedId}`);
    setModal(MODAL.FEED);
  };
  return (
    <Piece.Button value={userId} img={content} onClick={handleShowFeed}>
      <Piece.Cover>
        <Piece.Count>
          <FontAwesomeIcon icon={faHeart} />
          {likes}
        </Piece.Count>
        <Piece.Count>
          <FontAwesomeIcon icon={faComment} />
          {comments.length}
        </Piece.Count>
      </Piece.Cover>
    </Piece.Button>
  );
}

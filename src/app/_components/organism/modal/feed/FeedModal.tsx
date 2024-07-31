import { ModalStyle } from "@/_components/atoms/modal/Modal.style";
import FeedDetailBox from "../../feedDetailBox/FeedDetailBox";

export default function FeedModal() {
  return (
    <ModalStyle.Body>
      <FeedDetailBox />
    </ModalStyle.Body>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NoPost } from "./NoPostBox.style";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function NoPostBox() {
  return (
    <NoPost.Box>
      <NoPost.Img>
        <FontAwesomeIcon icon={faCamera} width={50} height={50} />
      </NoPost.Img>
      <NoPost.P>게시물 없음</NoPost.P>
    </NoPost.Box>
  );
}

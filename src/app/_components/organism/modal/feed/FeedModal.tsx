import { ModalStyle } from "@/_components/atoms/modal/Modal.style";
import CommentBox from "@/_components/organism/commentBox/CommentBox";
import { usePathname } from "next/navigation";
import { FeedDetail } from "./FeedModal.style";
import Image from "next/image";
import { useCustomQuery } from "@/_hooks/useFetch";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { FeedService } from "@/_services/feed_service";

export default function FeedModal() {
  const pathname = usePathname();
  const feedId = pathname.split("/")[2];

  const { data: feed } = useCustomQuery(QUERY_KEYS.FEED.DETAIL.queryKey, () => FeedService.getFeedDetail(feedId));

  if (feed)
    return (
      <ModalStyle.Body>
        <FeedDetail.Container>
          <FeedDetail.ImgBox>
            <Image src={feed.content} width={400} height={400} alt="feedImg" />
          </FeedDetail.ImgBox>
          <CommentBox feed={feed} />
        </FeedDetail.Container>
      </ModalStyle.Body>
    );
}

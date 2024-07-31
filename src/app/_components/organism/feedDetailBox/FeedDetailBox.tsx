import { FeedDetail } from "./FeedDetailBox.style";
import Image from "next/image";
import CommentBox from "../commentBox/CommentBox";
import { usePathname } from "next/navigation";
import { useCustomQuery } from "@/_hooks/useFetch";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { FeedService } from "@/_services/feed_service";

export default function FeedDetailBox() {
  const pathname = usePathname();
  const feedId = pathname.split("/")[2];
  const { data: feed } = useCustomQuery(QUERY_KEYS.FEED.DETAIL.queryKey, () => FeedService.getFeedDetail(feedId));
  if (feed)
    return (
      <FeedDetail.Container>
        <FeedDetail.ImgBox>
          <Image src={feed.content} width={400} height={400} alt="feedImg" />
        </FeedDetail.ImgBox>
        <CommentBox feed={feed} />
      </FeedDetail.Container>
    );
}
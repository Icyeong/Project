import { ModalStyle } from "@/_components/atoms/modal/Modal.style";
import CommentBox from "@/_components/organism/commentBox/CommentBox";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { FeedDetail } from "./FeedModal.style";
import { createFeeds } from "@/_dummyData/feedDummy";
import Image from "next/image";
import { FeedProps } from "@/_components/molecules/feed/Feed";

export default function FeedModal() {
  const pathname = usePathname();
  const feedId = pathname.split("/")[2];

  const feed: FeedProps = createFeeds(1)[0];

  useEffect(() => {
    console.log("pathname : ", pathname);
    console.log("feedId : ", feedId);
  }, []);
  return (
    <ModalStyle.Body>
      <FeedDetail.Container>
        <FeedDetail.ImgBox>
          <Image src={feed.img} width={400} height={400} alt="feedImg" />
        </FeedDetail.ImgBox>
        <CommentBox feed={feed} />
      </FeedDetail.Container>
    </ModalStyle.Body>
  );
}

import { queryClient } from "@/(pages)/App";
import BaseButton from "@/_components/atoms/button/BaseButton";
import { ModalStyle } from "@/_components/atoms/modal/Modal.style";
import { FeedProps } from "@/_components/molecules/feed/Feed";
import { Write } from "@/_components/molecules/ModalContent/editPostModal/EditPostModal.style";
import WritingBox from "@/_components/molecules/writingBox/WritingBox";
import { INPUT_SIZE } from "@/_constant/input";
import { useCustomMutation } from "@/_hooks/useFetch";
import { FeedService } from "@/_services/feed_service";
import useFeedStore from "@/_stores/client/feedStore";
import useModalStore from "@/_stores/client/modalStore";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { InvalidateQueryFilters } from "@tanstack/react-query";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function EditFeedModal() {
  const { selectedFeed } = useFeedStore();
  const { closeModal } = useModalStore();
  if (!selectedFeed) return null;

  const [textSize, setTextSize] = useState(selectedFeed.text.length);
  const [newFeedData, setFeedData] = useState<FeedProps>(selectedFeed);

  const handleCancelClick = () => {
    closeModal();
  };
  const handleFinishClick = () => {
    mutateEditFeed(newFeedData);
  };
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (textSize > INPUT_SIZE.FEED_CONTENT) return;
    setFeedData((prevData: FeedProps) => ({ ...prevData, text: e.target.value }));
    setTextSize(e.target.value.length);
  };

  const { mutate: mutateEditFeed } = useCustomMutation(FeedService.editFeed, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.FEED.LIST.queryKey as InvalidateQueryFilters);
      closeModal();
    },
  });
  return (
    <>
      <ModalStyle.Header>
        <Write.Header>
          <BaseButton onClick={handleCancelClick} />
          정보 수정
          <BaseButton value="완료" color="#0095F6" onClick={handleFinishClick} />
        </Write.Header>
      </ModalStyle.Header>
      <ModalStyle.Body>
        <Write.Flex>
          <Write.ImgBox>
            {selectedFeed.content && <Image src={selectedFeed.content} width={300} height={400} alt="preview" />}
          </Write.ImgBox>
          <WritingBox text={newFeedData.text} textSize={INPUT_SIZE.FEED_CONTENT} onChange={handleTextChange}>
            hello~
          </WritingBox>
        </Write.Flex>
      </ModalStyle.Body>
    </>
  );
}

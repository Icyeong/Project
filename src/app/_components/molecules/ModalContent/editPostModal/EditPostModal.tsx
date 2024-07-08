import useModalStore from "@/_stores/client/modalStore";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { FeedProps } from "../../feed/Feed";
import { v4 } from "uuid";
import useAuthStore from "@/_stores/client/authStore";
import { useQueryClient } from "@tanstack/react-query";
import { useCustomMutation } from "@/_hooks/useFetch";
import { FeedService } from "@/_services/feed_service";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { ModalStyle } from "@components/atoms/modal/Modal.style";
import { Write } from "./EditPostModal.style";
import IconButton from "@components/atoms/button/IconButton";
import BaseButton from "@components/atoms/button/BaseButton";
import WritingBox from "../../writingBox/WritingBox";
import { faker } from "@faker-js/faker";
import { POST_MODAL } from "@/_constant/modal";

interface EditPostProps {
  setStep: Dispatch<SetStateAction<string>>;
}

const queryClient = useQueryClient();

export default function EditPostModal({ setStep }: EditPostProps) {
  const { selectedImage, closeModal } = useModalStore();
  const [textSize, setTextSize] = useState(0);
  const [newFeedData, setFeedData] = useState<FeedProps>({
    feedId: v4(),
    username: useAuthStore().userName,
    createdAt: "",
    following: false,
    content: selectedImage || faker.image.urlLoremFlickr(),
    text: "",
    likes: 0,
  });

  const { mutate: createFeed } = useCustomMutation(FeedService.postFeed, {
    onSuccess: (data: FeedProps) => {
      queryClient.setQueryData(
        QUERY_KEYS.FEED.LIST.queryKey,
        (oldData: { pageParams: boolean[]; pages: FeedProps[][] }) => {
          console.log("oldData : ", oldData);

          return { ...oldData, pages: [[data, ...oldData.pages[0]], ...oldData.pages.slice(1)] };
        },
      );
      closeModal();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
  });
  const handleBackClick = () => {
    setStep(POST_MODAL.PREVIEW);
  };
  const handleNextClick = () => {
    console.log("data : ", newFeedData);

    createFeed({ ...newFeedData, createdAt: new Date().toISOString() });
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (textSize > 1199) return;
    setFeedData((prevData: FeedProps) => ({ ...prevData, text: e.target.value }));
    setTextSize(e.target.value.length);
  };
  return (
    <>
      <ModalStyle.Header>
        <Write.Header>
          <IconButton awesomeIcon={faArrowLeft} color="gray" onClick={handleBackClick} />
          새 게시물 만들기
          <BaseButton value="공유하기" color="#0095F6" onClick={handleNextClick} />
        </Write.Header>
      </ModalStyle.Header>
      <ModalStyle.Body>
        <Write.Flex>
          <Write.ImgBox>
            {selectedImage && <Image src={selectedImage} width={300} height={400} alt="preview" />}
          </Write.ImgBox>
          <WritingBox text={newFeedData.text} textSize={textSize} onChange={handleTextChange}>
            hello~
          </WritingBox>
        </Write.Flex>
      </ModalStyle.Body>
    </>
  );
}

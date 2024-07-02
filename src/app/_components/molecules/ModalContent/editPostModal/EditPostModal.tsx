import { ModalStyle } from "@components/atoms/modal/Modal.style";
import React, { ChangeEvent, useState } from "react";
import { Content } from "./EditPostModal.style";
import BaseButton from "@components/atoms/button/BaseButton";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useModalStore from "@/_stores/client/modalStore";
import Image from "next/image";
import IconButton from "@components/atoms/button/IconButton";
import { MODAL_NAME } from "@/_constant/modal";
import WritingBox from "../../writingBox/WritingBox";
import { useCustomMutation } from "@/_hooks/useFetch";
import { FeedService } from "@/_services/feed_service";
import { v4 as uuidv4 } from "uuid";
import useAuthStore from "@/_stores/client/authStore";
import { FeedProps } from "../../feed/Feed";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";

export default function EditPostModal() {
  const { selectedImage, setModal, closeModal } = useModalStore();
  const [textSize, setTextSize] = useState(0);
  const [newFeedData, setFeedData] = useState<FeedProps>({
    feedId: uuidv4(),
    username: useAuthStore().userName,
    createdAt: "",
    following: false,
    content: selectedImage,
    text: "",
    likes: 0,
  });

  const queryClient = useQueryClient();

  const handleBackClick = () => {
    setModal(MODAL_NAME.EDIT_IMAGE);
  };
  const { mutate: createFeed } = useCustomMutation(FeedService.postFeed, {
    onSuccess: (data: FeedProps) => {
      queryClient.setQueryData(QUERY_KEYS.FEED.LIST.queryKey, (oldData: FeedProps[]) => {
        console.log("oldData : ", oldData);
        const updatedList = [...oldData, { ...data, createdAt: new Date().toISOString() }];
        updatedList.sort(
          (a: FeedProps, b: FeedProps) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        return updatedList;
      });
      closeModal();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
  });

  const handleNextClick = async () => {
    createFeed(newFeedData);
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (textSize > 1199) return;
    setFeedData((prevData: FeedProps) => ({ ...prevData, text: e.target.value }));
    setTextSize(e.target.value.length);
  };
  return (
    <>
      <ModalStyle.Header>
        <Content.Header>
          <IconButton awesomeIcon={faArrowLeft} color="gray" onClick={handleBackClick} />
          새 게시물 만들기
          <BaseButton value="공유하기" color="#0095F6" onClick={handleNextClick} />
        </Content.Header>
      </ModalStyle.Header>
      <ModalStyle.Body>
        <Content.Flex>
          <Content.ImgBox>
            {selectedImage && <Image src={selectedImage} width={300} height={400} alt="preview" />}
          </Content.ImgBox>
          <WritingBox text={newFeedData.text} textSize={textSize} onChange={handleTextChange}>
            hello~
          </WritingBox>
        </Content.Flex>
      </ModalStyle.Body>
    </>
  );
}

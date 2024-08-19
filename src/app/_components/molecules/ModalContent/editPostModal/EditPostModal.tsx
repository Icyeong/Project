import useModalStore from "@/_stores/client/modalStore";
import { ChangeEvent, useCallback, useState } from "react";
import { v4 } from "uuid";
import useAuthStore from "@/_stores/client/authStore";
import { useCustomMutation } from "@/_hooks/useFetch";
import { FeedService } from "@/_services/feed_service";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { ModalStyle } from "@components/atoms/modal/Modal.style";
import { Write } from "./EditPostModal.style";
import IconButton from "@components/atoms/button/IconButton";
import BaseButton from "@components/atoms/button/BaseButton";
import WritingBox from "../../writingBox/WritingBox";
import { POST_MODAL, PostModalType } from "@/_constant/modal";
import { INPUT_SIZE } from "@/_constant/input";
import { queryClient } from "@/(pages)/App";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";
import { InvalidateQueryFilters } from "@tanstack/react-query";
import { FeedProps } from "@/_types/feed";
import { isFeedProps } from "@/_dummyData/feedDummy";
import { FEED_ERROR } from "@/_constant/errors";

interface EditPostProps {
  setStep: (step: PostModalType) => void;
}

export default function EditPostModal({ setStep }: EditPostProps) {
  const { selectedImage, resetModalState } = useModalStore();
  const { userInfo } = useAuthStore();
  const [textSize, setTextSize] = useState(0);
  const [newFeedData, setFeedData] = useState<FeedProps>({
    feedId: v4(),
    userId: userInfo.userId,
    userName: userInfo.userName,
    userImg: userInfo.userImg,
    createdAt: "",
    following: false,
    content: selectedImage,
    text: "",
    likes: 0,
    comments: [],
  });

  const { mutate: createFeed } = useCustomMutation(FeedService.postFeed, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.FEED.LIST.queryKey as InvalidateQueryFilters);
      resetModalState();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
  });
  const handleBackClick = () => {
    setStep(POST_MODAL.PREVIEW);
  };
  const handleNextClick = () => {
    const newFeed = { ...newFeedData, createdAt: new Date().toISOString() };
    if (!isFeedProps(newFeed)) return window.alert(FEED_ERROR.ADD);
    createFeed({ ...newFeedData, createdAt: new Date().toISOString() });
  };

  const handleTextChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (textSize > INPUT_SIZE.FEED_CONTENT) return;
      setFeedData((prevData: FeedProps) => ({ ...prevData, text: e.target.value }));
      setTextSize(e.target.value.length);
    },
    [textSize],
  );
  return (
    <>
      <ModalStyle.Header>
        <Write.Header>
          <IconButton awesomeIcon={faArrowLeft} color="gray" onClick={handleBackClick} />
          새 게시물 만들기
          <BaseButton value="공유하기" color="#0095F6 !important" onClick={handleNextClick} />
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

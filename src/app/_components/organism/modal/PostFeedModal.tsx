import React, { ChangeEvent, useRef, useState } from "react";
import useAuthStore from "@/_stores/client/authStore";
import useModalStore from "@/_stores/client/modalStore";
import BaseButton from "@components/atoms/button/BaseButton";
import { ModalStyle } from "@components/atoms/modal/Modal.style";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Preview, Upload, Write } from "./PostFeedModal.style";
import IconButton from "@components/atoms/button/IconButton";
import Image from "next/image";
import WritingBox from "@components/molecules/writingBox/WritingBox";
import { v4 } from "uuid";
import { FeedProps } from "@components/molecules/feed/Feed";
import { useQueryClient } from "@tanstack/react-query";
import { useCustomMutation } from "@/_hooks/useFetch";
import { FeedService } from "@/_services/feed_service";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";

export default function PostFeedModal() {
  const { selectedImage, setSelectedImage, closeModal } = useModalStore();
  const [step, setStep] = useState(1);
  const [textSize, setTextSize] = useState(0);
  const [newFeedData, setFeedData] = useState<FeedProps>({
    feedId: v4(),
    username: useAuthStore().userName,
    createdAt: "",
    following: false,
    content: selectedImage,
    text: "",
    likes: 0,
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleSelectClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setStep(2);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackClick = () => {
    const res = confirm("게시물을 삭제하시겠어요?").valueOf();
    if (res) {
      setStep(1);
    }
  };

  const { mutate: createFeed } = useCustomMutation(FeedService.postFeed, {
    onSuccess: (data: FeedProps) => {
      useQueryClient().setQueryData(QUERY_KEYS.FEED.LIST.queryKey, (oldData: FeedProps[]) => {
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
      {step === 1 && (
        <>
          <ModalStyle.Header>새 게시물 만들기</ModalStyle.Header>
          <ModalStyle.Body>
            <Upload.Container>
              <Upload.ImgBox>
                <FontAwesomeIcon icon={faPlusSquare} />
              </Upload.ImgBox>
              <Upload.Text>사진과 동영상을 여기에 끌어다 놓으세요</Upload.Text>
              <Upload.Input ref={fileInputRef} type="file" onChange={handleFileChange} />
              <BaseButton
                type="submit"
                color="white"
                $bgColor="#0095F6"
                radius={8}
                value="컴퓨터에서 선택"
                onClick={handleSelectClick}
              />
            </Upload.Container>
          </ModalStyle.Body>
        </>
      )}
      {step === 2 && (
        <>
          <ModalStyle.Header>
            <Preview.Header>
              <IconButton awesomeIcon={faArrowLeft} color="gray" onClick={handleBackClick} />
              미리보기
              <BaseButton value="다음" color="#0095F6" onClick={() => setStep(3)} />
            </Preview.Header>
          </ModalStyle.Header>
          <ModalStyle.Body>
            <Preview.Flex>
              <Preview.ImgBox>
                {selectedImage && <Image src={selectedImage} width={300} height={400} alt="preview" />}
              </Preview.ImgBox>
            </Preview.Flex>
          </ModalStyle.Body>
        </>
      )}
      {step === 3 && (
        <>
          <ModalStyle.Header>
            <Write.Header>
              <IconButton awesomeIcon={faArrowLeft} color="gray" onClick={() => setStep(2)} />
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
      )}
    </>
  );
}

import { ModalStyle } from "@components/atoms/modal/Modal.style";
import { Options } from "./FeedOptionModal.style";
import useAuthStore from "@/_stores/client/authStore";
import useModalStore from "@/_stores/client/modalStore";
import useFeedStore from "@/_stores/client/feedStore";
import { FeedService } from "@/_services/feed_service";
import { useCustomMutation } from "@/_hooks/useFetch";
import { queryClient } from "@/(pages)/App";
import { FEED_OPTIONS_MODAL, MODAL } from "@/_constant/modal";
import { InvalidateQueryFilters } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/_stores/server/queryKeys";

export default function FeedOptionModal() {
  const { userName } = useAuthStore();
  const { selectedFeed } = useFeedStore();
  const { closeModal, setModal } = useModalStore();

  const { mutate: mutateDeleteFeed } = useCustomMutation(FeedService.deleteFeed, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.FEED.LIST.queryKey as InvalidateQueryFilters);
      closeModal();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
  });

  const deleteFeedClick = () => {
    if (selectedFeed) {
      mutateDeleteFeed(selectedFeed.feedId);
    }
  };

  const editFeedClick = () => {
    setModal(MODAL.EDIT_FEED);
  };

  const getOptionFunction = (fn: string) => {
    switch (fn) {
      case "deleteFeed":
        return deleteFeedClick;
      case "editFeed":
        return editFeedClick;
      default:
        return () => alert("not yet working...");
    }
  };

  const getCurrentOption = () => {
    if (selectedFeed?.username === userName) {
      return FEED_OPTIONS_MODAL.MYFEED.map((option, idx) => (
        <Options.Button key={idx} onClick={getOptionFunction(option.fn)}>
          {option.name}
        </Options.Button>
      ));
    } else {
      return FEED_OPTIONS_MODAL.OTHERS.map((option, idx) => (
        <Options.Button key={idx} onClick={getOptionFunction(option.fn)}>
          {option.name}
        </Options.Button>
      ));
    }
  };
  return (
    <ModalStyle.Body>
      {getCurrentOption()}
      <Options.Button onClick={closeModal}>취소</Options.Button>
    </ModalStyle.Body>
  );
}

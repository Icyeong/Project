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
import { useRouter } from "next/navigation";
import { USER_ALERT } from "@/_constant/alerts";

export default function FeedOptionModal() {
  const { userInfo } = useAuthStore();
  const { selectedFeed } = useFeedStore();
  const { closeModal, setModal } = useModalStore();
  const router = useRouter();

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

  const linkToFeedClick = () => {
    closeModal();
    router.push(`/p/${selectedFeed?.feedId}`);
  };

  const copyLinkClick = async () => {
    const currentUrl = new URL(window.location.href).origin + "/p/" + selectedFeed?.feedId;
    try {
      await navigator.clipboard.writeText(currentUrl);
      closeModal();
      window.alert(USER_ALERT.LINK_COPIED);
    } catch (err) {
      console.error(err);
    }
  };

  const getOptionFunction = (fn: string) => {
    switch (fn) {
      case "deleteFeed":
        return deleteFeedClick;
      case "editFeed":
        return editFeedClick;
      case "linkToFeed":
        return linkToFeedClick;
      case "copyLink":
        return copyLinkClick;
      default:
        return () => alert("not yet working...");
    }
  };

  const getCurrentOption = () => {
    const isMyFeed = selectedFeed?.userName === userInfo.userName;

    return FEED_OPTIONS_MODAL[isMyFeed ? "MYFEED" : "OTHERS"].map((option, idx) => (
      <Options.Button key={idx} onClick={getOptionFunction(option.fn)}>
        {option.name}
      </Options.Button>
    ));
  };
  return (
    <ModalStyle.Body>
      {getCurrentOption()}
      <Options.Button onClick={closeModal}>취소</Options.Button>
    </ModalStyle.Body>
  );
}

import { MouseEvent, ReactNode } from "react";
import ColoredBg from "@components/atoms/coloredBg/ColoredBg";
import { ModalStyle } from "@components/atoms/modal/Modal.style";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function ClosePage({ children }: { children: ReactNode }) {
  const router = useRouter();
  const handleCloseCLick = (e: MouseEvent<HTMLDivElement>) => {
    router.back();
  };
  return (
    <ColoredBg bgColor="#333334">
      <ModalStyle.CloseBtn role="button" onClick={handleCloseCLick}>
        <FontAwesomeIcon icon={faClose} />
      </ModalStyle.CloseBtn>
      {children}
    </ColoredBg>
  );
}

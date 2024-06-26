import React from "react";
import { Controller } from "./ControlBar.style";
import { faBookmark, faComment, faHeart, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import IconButton from "@components/atoms/button/IconButton";

export default function ControlBar() {
  return (
    <Controller.Container>
      <Controller.Buttons>
        <IconButton awesomeIcon={faHeart} />
        <IconButton awesomeIcon={faComment} />
        <IconButton awesomeIcon={faPaperPlane} />
      </Controller.Buttons>
      <IconButton awesomeIcon={faBookmark} />
    </Controller.Container>
  );
}

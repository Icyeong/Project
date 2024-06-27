import React from "react";
import { Box } from "./WritingBox.style";
import Avatar from "@/_components/atoms/avatar/Avatar";

export default function WritingBox() {
  return (
    <Box.Container>
      <Box.Header>
        <Avatar img="" size={32} />
        icy_yeong
      </Box.Header>
      <Box.Body role="textbox">문구를 입력하세요...</Box.Body>
      <Box.Footer>0/2200</Box.Footer>
    </Box.Container>
  );
}

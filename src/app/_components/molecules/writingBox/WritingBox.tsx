import { Box } from "./WritingBox.style";
import Avatar from "@components/atoms/avatar/Avatar";
import { TextArea } from "@/_components/atoms/textarea/TextArea";
import ToggleButton from "@/_components/atoms/button/ToggleButton";
import useAuthStore from "@/_stores/client/authStore";
import { INPUT_TEXT } from "@/_constant/input";
import { BUTTON_TEXT } from "@/_constant/button";

export default function WritingBox({
  text,
  textSize,
  onChange,
  children,
}: {
  text: string;
  textSize: number;
  onChange: any;
  children: React.ReactNode;
}) {
  const { userInfo } = useAuthStore();
  const { userName, userImg } = userInfo;

  return (
    <Box.Container>
      <Box.Header>
        <Avatar img={userImg} size={32} />
        {userName}
      </Box.Header>
      <TextArea maxLength={2200} $maxHeight={160} placeholder={INPUT_TEXT.TYPE_TEXT} value={text} onChange={onChange} />
      <Box.Footer>{textSize}/2200</Box.Footer>
      <ToggleButton label={BUTTON_TEXT.ADVANCED_SETTING}>{children}</ToggleButton>
    </Box.Container>
  );
}

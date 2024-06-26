import React, { useEffect, useState } from "react";
import { Text } from "./TextBox.style";
import classNames from "classnames";

interface TextBoxProps {
  username: string;
  text: string;
}

export default function TextBox({ username, text }: TextBoxProps) {
  const [hide, setHide] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (hydrated)
    return (
      <Text.Container>
        <Text.P className={classNames({ hide: hide })}>
          <button>{username}</button>
          {text}
        </Text.P>
        <button className={classNames("seeMore", { hide: !hide })} onClick={() => setHide(!hide)}>
          더보기
        </button>
      </Text.Container>
    );
}

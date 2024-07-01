import React, { ChangeEvent, useState } from "react";
import { Button } from "./ToggleButton.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function ToggleButton({ label, children }: { label: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsOpen(e.target.checked);
  };
  return (
    <Button.Container>
      <Button.Input type="checkbox" id={`toggleButton${label}`} onChange={handleCheckChange} />
      <Button.Label htmlFor={`toggleButton${label}`}>
        {label}
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
      </Button.Label>
      {isOpen && <Button.ContentBox>{children}</Button.ContentBox>}
    </Button.Container>
  );
}

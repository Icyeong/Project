import React, { AllHTMLAttributes } from "react";
import { NavStyle } from "./Nav.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface NavProps extends AllHTMLAttributes<HTMLButtonElement> {
  name: string;
  icon?: IconDefinition;
  img?: string;
}

function NavButton({ name, icon, img, onClick }: NavProps) {
  return (
    <NavStyle.Li>
      <button onClick={onClick}>
        <NavStyle.Icon>
          {icon && <FontAwesomeIcon icon={icon} />}
          {img && <Image src={img} width={22} height={22} alt={name} />}
        </NavStyle.Icon>
        {name}
      </button>
    </NavStyle.Li>
  );
}
export default React.memo(NavButton);

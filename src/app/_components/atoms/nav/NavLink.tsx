"use client";
import React from "react";
import { NavStyle } from "./Nav.style";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface NavProps {
  name: string;
  href: string;
  icon?: IconDefinition;
  img?: string;
}

function NavLink({ name, href, icon, img }: NavProps) {
  const pathname = usePathname();
  return (
    <NavStyle.Li className={classNames({ active: pathname === href })}>
      <Link href={href}>
        <NavStyle.Icon>
          {icon && <FontAwesomeIcon icon={icon} />}
          {img && <Image src={img} width={22} height={22} alt={name} />}
        </NavStyle.Icon>
        <NavStyle.Name className="navName">{name}</NavStyle.Name>
      </Link>
    </NavStyle.Li>
  );
}

export default React.memo(NavLink);

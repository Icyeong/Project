"use client";
import React from "react";
import { NavStyle } from "./Nav.style";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface NavProps {
  name: string;
  href: string;
  icon?: IconDefinition;
  img?: string;
}

export default function Nav({ name, href, icon, img }: NavProps) {
  const pathname = usePathname();
  return (
    <NavStyle.Li className={classNames({ active: pathname === href })}>
      <Link href={href}>
        <NavStyle.Icon>{icon ? <FontAwesomeIcon icon={icon} /> : <img src={img} alt={name} />}</NavStyle.Icon>
        {name}
      </Link>
    </NavStyle.Li>
  );
}

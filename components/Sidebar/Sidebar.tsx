"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuItems from "./items";
import { IconNames, IconComponent } from "../Icon/MUIIcon";
import LogoutButton from "../LoguotButton/LogoutButton";
import { useAppSelector } from "@/store/store";

type Props = {};

function Sidebar({}: Props) {
  const currentRoute = usePathname();

  const username = useAppSelector((state) => state.user.name);

  const renderItems = menuItems.map((item) => {
    return (
      <Link
        key={item.id}
        href={item.path}
        className={`menu-item ${currentRoute === item.path ? "active" : ""}`}
      >
        <IconComponent iconName={item.icon as IconNames} />
        {item.title}
      </Link>
    );
  });

  return (
    <aside>
      <div className="sidebar-logo">Logo</div>
      <nav>{renderItems}</nav>
      <div className="sidebar-bottom">
        {username}
        <LogoutButton />
      </div>
    </aside>
  );
}

export default Sidebar;

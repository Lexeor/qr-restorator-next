"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuItems from "./items";

// import DashboardIcon from "@mui/icons-material/Dashboard";
// import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
// import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// import AssessmentIcon from "@mui/icons-material/Assessment";
// import StorefrontIcon from "@mui/icons-material/Storefront";

// const icons = [
//   DashboardIcon,
//   TableRestaurantIcon,
//   RestaurantMenuIcon,
//   AssessmentIcon,
//   StorefrontIcon,
// ];

type Props = {};

function Sidebar({}: Props) {
  const currentRoute = usePathname();

  const renderItems = menuItems.map((item) => {
    return (
      <Link
        key={item.id}
        href={item.path}
        className={`menu-item ${currentRoute === item.path ? "active" : ""}`}
      >
        <i className={item.icon}></i>
        {item.title}
      </Link>
    );
  });

  return (
    <aside>
      <div className="sidebar-logo">Logo</div>
      <nav>{renderItems}</nav>
    </aside>
  );
}

export default Sidebar;

import React from "react";
import Link from "next/link";
import menuItems from "./items";

type Props = {};

function Sidebar({}: Props) {
  const renderItems = menuItems.map((item) => {
    return (
      <Link key={item.id} href={item.path}>
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

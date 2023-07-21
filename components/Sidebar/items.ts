type MenuItem = {
  id: number;
  path: string;
  title: string;
  icon: string;
};

const items: MenuItem[] = [
  { id: 0, path: "/dashboard", title: "Dashboard", icon: "ri-dashboard-line" },
  { id: 1, path: "/tables", title: "Tables", icon: "ri-layout-grid-fill" },
  { id: 2, path: "/menu", title: "Menu", icon: "ri-restaurant-fill" },
  { id: 3, path: "/reports", title: "Reports", icon: "ri-file-chart-line" },
  { id: 4, path: "/restaurant", title: "Restaurant", icon: "ri-store-3-line" },
];

export default items;

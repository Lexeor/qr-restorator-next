type MenuItem = {
  id: number;
  path: string;
  title: string;
  icon: string;
};

const items: MenuItem[] = [
  { id: 0, path: "/dashboard", title: "Dashboard", icon: "Dashboard" },
  { id: 1, path: "/tables", title: "Tables", icon: "TableRestaurant" },
  { id: 2, path: "/menu", title: "Menu", icon: "RestaurantMenu" },
  { id: 3, path: "/reports", title: "Reports", icon: "Assessment" },
  { id: 4, path: "/restaurant", title: "Restaurant", icon: "Storefront" },
];

export default items;

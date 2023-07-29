export type RestaurantType = {
  id: number;
  name: string;
  address: string;
  menu: number;
} | null;

export type UserType = {
  id: number;
  name: string;
  token: string;
  restaurant: RestaurantType;
};

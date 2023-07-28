export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type DishResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type DishCategory = {
  id: number;
  name: string;
};

export type Dish = {
  id: number;
  description: string;
  name: string;
  category: DishCategory;
  price: number;
  image: string;
};

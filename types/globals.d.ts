export {};

declare global {
  type Product = {
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

  type DishResponse = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  };
}

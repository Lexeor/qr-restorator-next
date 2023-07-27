import React from "react";
import HeaderContent from "@/components/HeaderContent/HeaderContent";
import DishForm from "@/components/Forms/DishForm/DishForm";

async function getProducts(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

async function DishDetails({ params: { id } }: Props) {
  const dish: Product = await getProducts(id);

  return (
    <>
      <HeaderContent title={dish.title} backButton></HeaderContent>
      <DishForm dish={{
        id: dish.id,
        name: dish.title,
        description: dish.description,
        categoryId: dish.rating.toString(),
        price: dish.price,
        }}/>
    </>
  );
}

export default DishDetails;

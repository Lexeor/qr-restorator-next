import React from "react";

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
      <div>Dish Details {id}</div>
      <p>{dish.title}</p>
      <p>{dish.category}</p>
      <p>{dish.description}</p>
      <p>Rating: {dish.rating}</p>
      <p>Price: ${dish.price}</p>
    </>
  );
}

export default DishDetails;

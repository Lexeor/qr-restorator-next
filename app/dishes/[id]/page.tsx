import React from "react";
import HeaderContent from "@/components/HeaderContent/HeaderContent";
import DishForm from "@/components/Forms/DishForm/DishForm";

// mock
import { getLocalProducts } from "../../../utils/localdata";

// async function getProducts(id: string) {
//   const response = await fetch(`https://dummyjson.com/products/${id}`, {
//     next: {
//       revalidate: 60,
//     },
//   });

//   return response.json();
// }

type Props = {
  params: {
    id: string;
  };
};

async function DishDetails({ params: { id } }: Props) {
  const dish: Dish[] = await getLocalProducts(Number(id));

  return (
    <>
      <HeaderContent title={dish[0].name} backButton></HeaderContent>
      <DishForm
        dish={{
          id: dish[0].id,
          name: dish[0].name,
          description: dish[0].description,
          categoryId: dish[0].category.id.toString(),
          price: dish[0].price,
        }}
      />
    </>
  );
}

export default DishDetails;

import React from "react";
import { Button, Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Metadata } from "next";
import Link from "next/link";
import DishCard from "@/components/DishCard/DishCard";
import HeaderContent from "@/components/HeaderContent/HeaderContent";

// mock
import { getLocalProducts } from "../../utils/localdata";

// async function getProducts() {
//   const response = await fetch("https://dummyjson.com/products", {
//     next: {
//       revalidate: 60,
//     },
//   });

//   return response.json();
// }

export const metadata: Metadata = {
  title: "Dishes",
};

async function Dishes() {
  const response: Dish[] = await getLocalProducts();

  const renderItems =
    response.length > 0 ? (
      response.map((item) => (
        <Grid item lg={2} md={4} sm={6} xs={12} key={item.id}>
          <DishCard item={item} />
        </Grid>
      ))
    ) : (
      <div>Not found.</div>
    );

  return (
    <>
      <HeaderContent title={"Dishes"}>
        <Button startIcon={<Add />} color={"success"} variant={"contained"}>
          <Link href="/dishes/new">Add new dish</Link>
        </Button>
      </HeaderContent>
      <Grid container spacing={2}>
        {renderItems}
      </Grid>
    </>
  );
}

export default Dishes;

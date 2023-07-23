import React from "react";
import { Typography, Stack, Card, Button, Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Metadata } from "next";
import Link from "next/link";
import DishCard from "@/components/DishCard/DishCard";

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products", {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

export const metadata: Metadata = {
  title: "Dishes",
};

async function Dishes() {
  const response: DishResponse = await getProducts();

  const renderItems =
    response.products.length > 0 ? (
      response.products.map((item) => (
        <Grid item lg={2} md={4} sm={6} xs={12} key={item.id}>
          <DishCard item={item} />
        </Grid>
      ))
    ) : (
      <div>Not found.</div>
    );

  return (
    <>
      <Stack
        direction={"row"}
        gap={1}
        marginBottom={"1em"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5">Dishes</Typography>
        <Button startIcon={<Add />} color={"success"} variant={"contained"}>
          <Link href="/dishes/new">Add new dish</Link>
        </Button>
      </Stack>
      <Grid container spacing={2}>
        {renderItems}
      </Grid>
    </>
  );
}

export default Dishes;

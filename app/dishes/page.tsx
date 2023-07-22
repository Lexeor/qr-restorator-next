import React from "react";
import { Typography, Stack, Card } from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";

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
        <Card key={item.id}>
          <Link href={`/dishes/${item.id}`}>
            {item.title}
            <br />
            {item.category}
          </Link>
        </Card>
      ))
    ) : (
      <div>Not found.</div>
    );

  return (
    <>
      <Typography variant="h5">Dishes</Typography>
      <Stack direction="column" gap={1}>
        {renderItems}
      </Stack>
    </>
  );
}

export default Dishes;

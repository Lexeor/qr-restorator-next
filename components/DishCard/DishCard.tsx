import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { Edit } from "@mui/icons-material";

type Props = {
  item: Dish;
};

function DishCard({ item: { id, name, image } }: Props) {
  return (
    <div className="dish-card">
      <img src={image} />
      <strong>{name}</strong>
      <Button startIcon={<Edit />}>
        <Link href={`/dishes/${id}`}>Edit dish</Link>
      </Button>
    </div>
  );
}

export default DishCard;

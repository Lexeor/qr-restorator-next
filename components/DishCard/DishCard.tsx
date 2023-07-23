import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { Edit } from "@mui/icons-material";

type Props = {
  item: Product;
};

function DishCard({ item: { id, title, thumbnail } }: Props) {
  return (
    <div className="dish-card">
      <img src={thumbnail} />
      <strong>{title}</strong>
      <Button startIcon={<Edit />}>
        <Link href={`/dishes/${id}`}>Edit dish</Link>
      </Button>
    </div>
  );
}

export default DishCard;

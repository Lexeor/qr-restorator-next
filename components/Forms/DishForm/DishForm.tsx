"use client";

import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import { useForm, Form } from "../../../hooks/useForm";

type DishFormProps = {
  dish?: {
    id: number;
    name: string;
    description: string;
    categoryId: string;
    price: number | null;
  };
};

const initialValues = {
  id: 0,
  name: "",
  description: "",
  categoryId: "",
  price: null,
};

function DishForm({ dish }: DishFormProps) {
  const { values, setValues, handleInputChange } = useForm({ initialValues });

  return (
    <Form>
      <Grid direction="column" gap={2} container>
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          value={values.name}
          onChange={handleInputChange}
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          value={values.description}
          onChange={handleInputChange}
        />
        <TextField
          name="price"
          variant="outlined"
          label="Price"
          value={values.price}
          onChange={handleInputChange}
        />
      </Grid>
    </Form>
  );
}

export default DishForm;

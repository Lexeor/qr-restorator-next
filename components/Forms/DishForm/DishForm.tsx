"use client";

import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import { useForm, Form } from "../../../hooks/useForm";
import Controls from "../controls/Controls";

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
  const { values, setValues, handleInputChange, handleSelectChange } = useForm({
    initialValues,
  });

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
        <Controls.Select
          name="categoryId"
          label="Category"
          value={values.categoryId}
          onChange={handleSelectChange}
          options={[
            { id: 0, name: "Breakfast" },
            { id: 1, name: "Main" },
            { id: 2, name: "Soup" },
            { id: 3, name: "Salad" },
          ]}
        />
      </Grid>
    </Form>
  );
}

export default DishForm;

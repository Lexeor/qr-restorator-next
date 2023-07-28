"use client";

import React, { useState, useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useForm, Form } from "../../../hooks/useForm";
import Controls from "../controls/Controls";

import categories from "../../../data/categories.json";

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

  useEffect(() => {
    if (dish) {
      setValues(dish);
    }
  }, []);

  return (
    <Form>
      <Grid direction="column" gap={2} container>
        <TextField
          name="name"
          variant="outlined"
          size="small"
          label="Name"
          value={values.name}
          onChange={handleInputChange}
        />
        <TextField
          name="description"
          variant="outlined"
          size="small"
          label="Description"
          value={values.description}
          onChange={handleInputChange}
        />
        <TextField
          name="price"
          variant="outlined"
          size="small"
          label="Price"
          value={values.price}
          onChange={handleInputChange}
        />
        <Controls.Select
          name="categoryId"
          label="Category"
          value={values.categoryId}
          onChange={handleSelectChange}
          options={categories}
        />
        <Button variant={"contained"}>{dish ? "Update" : "Add"}</Button>
      </Grid>
    </Form>
  );
}

export default DishForm;

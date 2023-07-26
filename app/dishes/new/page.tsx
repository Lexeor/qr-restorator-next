import React from "react";
import HeaderContent from "@/components/HeaderContent/HeaderContent";
import DishForm from "@/components/Forms/DishForm/DishForm";

type Props = {};

function NewDish({}: Props) {
  return (
    <>
      <HeaderContent title={"Create new dish"} backButton></HeaderContent>
      <DishForm />
    </>
  );
}

export default NewDish;

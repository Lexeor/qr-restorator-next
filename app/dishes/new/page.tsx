import React from "react";
import HeaderContent from "@/components/HeaderContent/HeaderContent";

type Props = {};

function NewDish({}: Props) {
  return (
    <>
      <HeaderContent title={"Create new dish"} backButton></HeaderContent>
    </>
  );
}

export default NewDish;

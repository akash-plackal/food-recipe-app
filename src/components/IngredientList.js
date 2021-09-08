import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientList({ ingredients }) {
  const IngredientItem = ingredients.map((a) => {
    return <Ingredient key={a.id} {...a} />;
  });
  return <div>{IngredientItem}</div>;
}

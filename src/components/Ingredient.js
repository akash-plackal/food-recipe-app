import React from "react";

export default function Ingredient({ name, amt }) {
  return (
    <>
      <span>{name}</span>
      <span>{amt}</span>
    </>
  );
}

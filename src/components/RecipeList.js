import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./App";

function RecipeList({ sample }) {
  const { addNewRecipe } = useContext(RecipeContext);
  return (
    <>
      <div className="RecipeList">
        <div className="RecipeMain">
          {sample.map((a) => {
            return <Recipe key={a.id} {...a} />;
          })}
        </div>
        <div className="add-btn">
          <button onClick={addNewRecipe} className="btn btn-primary">
            Add recipe
          </button>
        </div>
      </div>
    </>
  );
}

export default RecipeList;

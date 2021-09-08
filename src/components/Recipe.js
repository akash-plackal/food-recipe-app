import React, { useContext } from "react";
import "../css/recipe.css";
import IngredientList from "./IngredientList";
import { RecipeContext } from "./App";

function Recipe(props) {
  const { deleteRecipeHandler, recipeSelectHandler } =
    useContext(RecipeContext);

  const { id, name, cookingTime, Serving, Instructions, ingredients } = props;
  return (
    <div className="Recipe">
      <div className="header">
        <h1>{name}</h1>
        <div>
          <button
            onClick={() => recipeSelectHandler(id)}
            className="btn btn-primary"
          >
            Edit
          </button>
          <button
            onClick={() => deleteRecipeHandler(id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
      <div>
        <span>cooking time: </span>
        <span>{cookingTime}</span>
      </div>
      <div>
        <span>Serving :</span>
        <span>{Serving}</span>
      </div>
      <div className="instructions">
        <span>Instructions :</span>
        <span>{Instructions}</span>
      </div>
      <div>
        <span>ingredients :</span>
        <div>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}

export default Recipe;

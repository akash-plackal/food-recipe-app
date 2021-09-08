import React, { useContext } from "react";
import "../css/Recipe-edit.css";
import { RecipeContext } from "./App";
import { v4 as uuidv4 } from "uuid";
import RecipeIngredientsEdit from "./RecipeIngredientsEdit";

export const RecipeEdit = ({ recipe }) => {
  const { recipeChangeHandler, recipeSelectHandler } =
    useContext(RecipeContext);

  const handleChanges = (changes) => {
    recipeChangeHandler(recipe.id, { ...recipe, ...changes });
  };

  const ingredientChangeHandler = (id, ingredient) => {
    const newingredient = [...recipe.ingredients];
    const index = newingredient.findIndex((r) => r.id === id);
    newingredient[index] = ingredient;
    handleChanges({ ingredients: newingredient });
  };

  const ingredientAddHandler = () => {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amt: "",
    };
    handleChanges({ ingredient: [...recipe.ingredients, newIngredient] });
  };

  const ingredientDeleteHandler = (id) => {
    handleChanges({
      ingredients: recipe.ingredients.filter((i) => i.id !== id),
    });
  };

  return (
    <div className="recipe-edit">
      <div className="top-btn-div">
        <button
          onClick={() => recipeSelectHandler(undefined)}
          className="top-btn"
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit-section">
        <div className="label-row">
          <label htmlFor="name" className="recipe-edit-label">
            name
          </label>
          <input
            className="recipe-edit-input"
            type="text"
            name="name"
            id="name"
            onChange={(e) => handleChanges({ name: e.target.value })}
            defaultValue={recipe.name}
          />
        </div>
        <div className="label-row">
          <label htmlFor="cookingTime" className="recipe-edit-label">
            cook Time
          </label>
          <input
            className="recipe-edit-input"
            type="text"
            name="cookTime"
            id="cookTime"
            onChange={(e) => handleChanges({ cookingTime: e.target.value })}
            defaultValue={recipe.cookingTime}
          />
        </div>
        <div className="label-row">
          <label htmlFor="Serving" className="recipe-edit-label">
            serving
          </label>
          <input
            className="recipe-edit-input"
            type="number"
            name="Servings"
            min="1"
            onChange={(e) =>
              handleChanges({ Serving: parseInt(e.target.value) || "" })
            }
            defaultValue={recipe.Serving}
          />
        </div>
        <div className="label-row">
          <label htmlFor="instructions" className="recipe-edit-label">
            instructions
          </label>
          <textarea
            className="recipe-edit-input"
            name="instructions"
            id="instructions"
            placeholder="1. Put salt in chicken
            2.boil until well cooked....."
            onChange={(e) => handleChanges({ Instructions: e.target.value })}
            defaultValue={recipe.Instructions}
          >
            {/* {recipe.Instructions} */}
          </textarea>
        </div>
        <br />
        <label className="ingredients">ingredients</label>
        <div className="name-amount">
          <div>Name</div>
          <div>Amount</div>
        </div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientsEdit
            ingredientChangeHandler={ingredientChangeHandler}
            ingredientDeleteHandler={ingredientDeleteHandler}
            key={ingredient.id}
            ingredient={ingredient}
          />
        ))}
        <button onClick={() => ingredientAddHandler()} className="btn btn-add">
          add ingredients
        </button>
      </div>
    </div>
  );
};

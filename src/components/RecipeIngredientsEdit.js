import React from "react";

const RecipeIngredientsEdit = ({
  ingredient,
  ingredientChangeHandler,
  ingredientDeleteHandler,
}) => {
  const handleChanges = (changes) => {
    ingredientChangeHandler(ingredient.id, { ...ingredient, ...changes });
  };

  return (
    <div className="ingredients-edit">
      <input
        onInput={(e) => handleChanges({ name: e.target.value })}
        defaultValue={ingredient.name}
        className="recipe-edit-input"
        type="text"
      />
      <input
        defaultValue={ingredient.amt}
        onInput={(e) => handleChanges({ amt: e.target.value })}
        className="recipe-edit-input"
        type="text"
      />
      <button
        onClick={() => ingredientDeleteHandler(ingredient.id)}
        className="btn-close"
      >
        &times;
      </button>
    </div>
  );
};

export default RecipeIngredientsEdit;

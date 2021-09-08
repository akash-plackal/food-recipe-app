import React, { createContext, useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import { RecipeEdit } from "./RecipeEdit";
import { v4 as uuidv4 } from "uuid";

export const RecipeContext = createContext();

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipe);
  const SelectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  useEffect(() => {
    const recipeJson = localStorage.getItem("recipes");
    if (recipeJson !== null) {
      setRecipes(JSON.parse(recipeJson));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const addNewRecipe = () => {
    const newRecipe = {
      ...recipes,
      id: uuidv4(),
      name: "",
      cookingTime: "",
      Serving: 1,
      Instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amt: "",
        },
        {
          id: uuidv4(),
          name: "",
          amt: "",
        },
      ],
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipeHandler = (id) => {
    if (selectedRecipeId !== null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    return setRecipes(recipes.filter((r) => r.id !== id));
  };

  const recipeSelectHandler = (id) => setSelectedRecipeId(id);

  const recipeChangeHandler = (id, recipe) => {
    const newRecipe = [...recipes];
    const index = newRecipe.findIndex((r) => r.id === id);
    newRecipe[index] = recipe;
    setRecipes(newRecipe);
  };

  const recipeValueProvider = {
    addNewRecipe,
    deleteRecipeHandler,
    recipeSelectHandler,
    recipeChangeHandler,
  };

  return (
    <RecipeContext.Provider value={recipeValueProvider}>
      <RecipeList sample={recipes} />
      {SelectedRecipe && <RecipeEdit recipe={SelectedRecipe} />}
    </RecipeContext.Provider>
  );
}

//===========================//

const sampleRecipe = [
  {
    id: uuidv4(),
    name: "maggi",
    cookingTime: "1:45",
    Serving: 3,
    Instructions: "1.boil water \n 2. add maggi masala \n  3.eat maggi",
    ingredients: [
      {
        id: uuidv4(),
        name: "maggi",
        amt: 1,
      },
      {
        id: uuidv4(),
        name: "water",
        amt: 1,
      },
    ],
  },

  {
    id: uuidv4(),
    name: "rice",
    cookingTime: "0:45",
    Serving: 8,
    Instructions: "1.boil water \n 2. add rice to water \n  3.eat rice",
    ingredients: [
      {
        id: 3,
        name: "rice ",
        amt: 2,
      },
      {
        id: 4,
        name: "salt",
        amt: 1,
      },
    ],
  },
];

export default App;

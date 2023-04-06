import { filterIngredients } from "./components/create_filters.js";
import { lolo } from "./dex.js";
import { recipesCards } from "./components/recipe_card.js";
import { getRecipesData } from "./api/api.js";
// import { getElement } from "./utils/utils.js";

// import { getElement } from "./utils/utils.js";
// import {filterIngredients} from ".";
console.log("🚀 ~ file: index.js:2 ~ lolo:", lolo);

filterIngredients(document.querySelector(".filter__ingredients"));

//display the list of recipes
const displayRecipes = async () => {
  const recipes = await getRecipesData();
  recipesCards(getElement("#recipes"), recipes);
};
displayRecipes();

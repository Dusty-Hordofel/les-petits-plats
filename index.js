import { displayIngredients } from "./components/create_filters.js";
import { recipesCards } from "./components/recipe_card.js";
import { getRecipesData } from "./api/api.js";
// import { filterSearch } from "./filters/search.js";
// import { ingredientsList } from "./components/ingredients_list.js";

displayIngredients(document.querySelector(".filter__ingredients"));

//display the list of recipes
const displayRecipes = async () => {
  const recipes = await getRecipesData();
  console.log("🚀 ~ file: index.js:12 ~ displayRecipes ~ recipes:", recipes);
  recipesCards(getElement("#recipes"), recipes);
};
displayRecipes();

//display the list of filtered recipes
/*const displayFilteredRecipes = async () => {
  const recipes = await getRecipesData();
  filterSearch(recipes);
};

displayFilteredRecipes();*/

// list of ingredients
/*export const displayFilterIngredients = (data, inputValue) => {
  const ingredients = [
    ...new Set(
      data
        .map((recipe) =>
          recipe.ingredients.map((ingredient) =>
            ingredient.ingredient.toLowerCase().trim()
          )
        )
        .flat()
        .sort()
    ),
  ];
  console.log(
    "🚀 ~ file: index.js:51 ~ displayFilterIngredients ~ ingredients:",
    ingredients
  );

  // Si on a un element dans l'input, on filtre les ingrédients
  if (inputValue) {
    return ingredients.filter((ingredient) =>
      ingredient.includes(inputValue.toLowerCase().trim())
    );
  }
  // Sinon on retourne tous les ingrédients
  return ingredients;
};

const displayRetrievedIngredients = async () => {
  const recipes = await getRecipesData();
  displayFilterIngredients(recipes);
};

displayRetrievedIngredients();*/

//display the list of ingredients
/*const displayIngredientsList = async () => {
  const recipes = await getRecipesData();
  ingredientsList(getElement(".filter__ingredients--list"), recipes);
};

displayIngredientsList();*/

/*

-
-
-
--
-
-
--
-
--
-
-
-
-
--

--
-
-
-
-
-
-
-
--
-
-
-
-
-
-
-
-


-
-
-
-
-
-
-
-
-
-
-
-
-
-
-

-


*/
// displayRetrievedIngredients()

// function retrieveIngredients(recipes) {
//     console.log(
//       "🚀 ~ file: index.js:38 ~ retrieveIngredients ~ recipes:",
//       recipes
//     );
//     const ingredients = new Set();
//     for (const recipe of recipes) {
//       recipe.ingredients.forEach((ingredient) => ingredients.add(ingredient));
//     }
//     console.log(Array.from(ingredients));
//     return Array.from(ingredients);
//   }

// const dd = (ol) => {
//     console.log("🚀 ~ file: index.js:55 ~ dd ~ ol:", ol);
//     //   return {};
//   };

import { displayIngredients } from "./components/create_filters.js";
import { recipesCards } from "./components/recipe_card.js";
import { getRecipesData } from "./api/api.js";
import { filterSearch } from "./filters/search.js";
import { ingredientsList } from "./components/ingredients_list.js";

displayIngredients(document.querySelector(".filter__ingredients"));

//display the list of recipes
const displayRecipes = async () => {
  const recipes = await getRecipesData();
  console.log("🚀 ~ file: index.js:12 ~ displayRecipes ~ recipes:", recipes);
  recipesCards(getElement("#recipes"), recipes);
};
displayRecipes();

//display the list of filtered recipes
const displayFilteredRecipes = async () => {
  const recipes = await getRecipesData();
  filterSearch(recipes);
};

displayFilteredRecipes();

// list of ingredients
export const filteredIngredients = (data, inputValue) => {
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
    "🚀 ~ file: index.js:40 ~ displayFilterIngredients ~ ingredients:",
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
  filteredIngredients(recipes);
};

displayRetrievedIngredients();

//display the list of ingredients
const displayIngredientsList = async () => {
  //get the form and the input
  const form = getElement(".search__input-ingredients");
  const nameInput = getElement("#ingredients-input");

  // list of ingredients
  const recipes = await getRecipesData();

  //recuperer la valeur de l'input et afficher la liste des ingrédients
  form.addEventListener("keyup", function () {
    //get the value of the input
    const value = nameInput.value;
    //filter the data based on the value of the input
    const ingredients = filteredIngredients(recipes, value);
    //display filtered data in the receipes container
    ingredientsList(getElement(".filter__ingredients--list"), ingredients);
  });
};

displayIngredientsList();

//gérer les tags

//search for ingredients
// export const inputIngredientSearch = () => {
//   //get the form and the input
//   const form = getElement(".search__input-ingredients");
//   const nameInput = getElement("#ingredients-input");

//   //recuperer la valeur de l'input
//   form.addEventListener("keyup", function () {
//     const value = nameInput.value;
//     console.log("🚀 ~ file: index.js:92 ~ value:", value);

//     return value;
//   });
// };

import {
  displayIngredients,
  displayAppliances,
  displayUstensils,
} from "./components/create_filters.js";
// import { recipesCards } from "./components/recipe_card.js";
import { getRecipesData } from "./api/api.js";
// import { filterSearch } from "./filters/search.js";
import {
  ingredientsList,
  appliancesList,
  ustensilsList,
} from "./components/ingredients_list.js";
// import { addFilteredIngredientTag } from "./filters/tags.js";

//store data to the local storage
const storeData = async () => {
  const recipes = await getRecipesData();
  setStorageItem("recipes", recipes);
};
storeData();
//retrieve stored data in the localStorage
const recipes = getStorageItem("recipes");
// console.log(getStorageItem("recipes"));

displayIngredients(document.querySelector(".filter__ingredients"));
displayAppliances(document.querySelector(".filter__appliances"));
displayUstensils(document.querySelector(".filter__ustensils"));

//display the list of recipes
const displayRecipes = () => {
  // const recipes = await getRecipesData();
  // const recipes = getStorageItem("recipes");
  // console.log("🚀 ~ file: index.js:12 ~ displayRecipes ~ recipes:", recipes);

  recipesCards(getElement("#recipes"), recipes);
};
displayRecipes();

//display the list of filtered recipes
const displayFilteredRecipes = () => {
  // const recipes = await getRecipesData();
  // const recipes = getStorageItem("recipes");
  // filterSearch(recipes);
};

// displayFilteredRecipes();

// console.log(displayFilteredRecipes());

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
  // console.log(
  //   "🚀 ~ file: index.js:60 ~ displayFilterIngredients ~ ingredients:",
  //   ingredients
  // );

  // Si on a un element dans l'input, on filtre les ingrédients
  if (inputValue) {
    return ingredients.filter((ingredient) =>
      ingredient.includes(inputValue.toLowerCase().trim())
    );
  }
  // Sinon on retourne tous les ingrédients
  // console.log(
  //   "🚀 ~ file: index.js:72 ~ displayFilterIngredients ~ ingredients:",
  //   ingredients
  // );
  return ingredients;
};

//afficher la liste des ingrédients dans le DOM: affichage initial sans filtre
const displayRetrievedIngredients = () => {
  /*set*/ ingredientsList(
    getElement(".filter__ingredients--list"),
    filteredIngredients(recipes)
  );
  // );
  // const ingredients = filteredIngredients(recipes);
  //display filtered data in the receipes container
  // ingredientsList(getElement(".filter__ingredients--list"), ingredients);
};

// console.log(displayRetrievedIngredients());
displayRetrievedIngredients();

//afficher la liste des ingrédients dans le DOM: affichage initial avec ou sans filtre
const displayIngredientsList = () => {
  //get the form and the input
  const form = getElement(".search__input-ingredients");
  const nameInput = getElement("#ingredients-input");

  // list of ingredients
  // const recipes = await getRecipesData();
  // const recipes = getStorageItem("recipes");

  //recuperer la valeur de l'input et afficher la liste des ingrédients
  form.addEventListener("keyup", function () {
    //get the value of the input
    const value = nameInput.value;
    //filter the data based on the value of the input
    const ingredients = filteredIngredients(recipes, value);
    // console.log("🚀 ~ file: index.js:112 ~ ingredients:", ingredients);
    //display filtered data in the receipes container
    ingredientsList(getElement(".filter__ingredients--list"), ingredients);
  });
};

displayIngredientsList();

//Récupérer et afficher la listes des appareils sans filtre
const displayRetrievedAppliances = () => {
  // console.log(
  appliancesList(
    getElement(".filter__appliances--list"),
    applianceListToFilter(recipes)
  );
  // );
};
displayRetrievedAppliances();

//Afficher la listes des appareils avec ou sans filtre
const displayAppliancesList = () => {
  //get the form and the input
  const form = getElement(".search__input-appliances");
  const nameInput = getElement("#appliances-input");

  // list of ingredients
  // const recipes = await getRecipesData();
  const recipes = getStorageItem("recipes");

  //recuperer la valeur de l'input et afficher la liste des ingrédients
  form.addEventListener("keyup", function () {
    //get the value of the input
    const value = nameInput.value;
    //filter the data based on the value of the input
    const appliances = applianceListToFilter(recipes, value);
    //display filtered data in the receipes container
    appliancesList(getElement(".filter__appliances--list"), appliances);
  });
};

displayAppliancesList();

//Récupérer et afficher la listes des ustensiles sans filtre
const displayRetrievedUstensils = () => {
  // console.log(
  ustensilsList(
    getElement(".filter__ustensils--list"),
    ustensilsListToFilter(recipes)
  );
  // );
};
displayRetrievedUstensils();

//Afficher la listes des ustensiles avec ou sans filtre
const displayUstensilsList = () => {
  //get the form and the input
  const form = getElement(".search__input-ustensils");
  const nameInput = getElement("#ustensils-input");

  // list of ingredients
  // const recipes = await getRecipesData();
  const recipes = getStorageItem("recipes");

  //recuperer la valeur de l'input et afficher la liste des ingrédients
  form.addEventListener("keyup", function () {
    //get the value of the input
    const value = nameInput.value;
    //filter the data based on the value of the input
    const ustensils = ustensilsListToFilter(recipes, value);
    //display filtered data in the receipes container
    appliancesList(getElement(".filter__ustensils--list"), ustensils);
  });
};

displayUstensilsList();

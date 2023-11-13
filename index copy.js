// import {
//   displayIngredients,
//   displayAppliances,
// } from "./components/create_filters.js";
// import { getRecipesData } from "./api/api.js";
// import {
//   ingredientsList,
//   appliancesList,
// } from "./components/ingredients_list.js";

// //store data to the local storage
// const storeData = async () => {
//   const recipes = await getRecipesData();
//   setStorageItem("recipes", recipes);
// };
// storeData();

// //retrieve stored data in the localStorage
// const recipes = getStorageItem("recipes");
// // console.log(getStorageItem("recipes"));

// displayIngredients(document.querySelector(".filter__ingredients"));
// displayAppliances(document.querySelector(".filter__appliances"));

// //display the list of recipes
// const displayRecipes = () => {
//   recipesCards(getElement("#recipes"), recipes);
// };
// displayRecipes();

// //display the list of filtered recipes
// const displayFilteredRecipes = () => {
//   // const recipes = await getRecipesData();
//   // const recipes = getStorageItem("recipes");
//   filterSearch(recipes);
// };

// displayFilteredRecipes();

// // console.log(displayFilteredRecipes());

// // list of ingredients
// export const filteredIngredients = (data, inputValue) => {
//   const ingredients = [
//     ...new Set(
//       data
//         .map((recipe) =>
//           recipe.ingredients.map((ingredient) =>
//             ingredient.ingredient.toLowerCase().trim()
//           )
//         )
//         .flat()
//         .sort()
//     ),
//   ];

//   // Si on a un element dans l'input, on filtre les ingrédients
//   if (inputValue) {
//     return ingredients.filter((ingredient) =>
//       ingredient.includes(inputValue.toLowerCase().trim())
//     );
//   }
//   // Sinon on retourne tous les ingrédients
//   return ingredients;
// };

// console.log(filteredIngredients(recipes));
// const displayRetrievedIngredients = () => {
//   ingredientsList(
//     getElement(".filter__ingredients--list"),
//     filteredIngredients(recipes)
//   );
// };

// // console.log(displayRetrievedIngredients());
// displayRetrievedIngredients();

// //display the list of ingredients
// const displayIngredientsList = () => {
//   //get the form and the input
//   const form = getElement(".search__input-ingredients");
//   const nameInput = getElement("#ingredients-input");

//   //recuperer la valeur de l'input et afficher la liste des ingrédients
//   form.addEventListener("keyup", function () {
//     //get the value of the input
//     const value = nameInput.value;
//     //filter the data based on the value of the input
//     const ingredients = filteredIngredients(recipes, value);

//     //display filtered data in the receipes container
//     ingredientsList(getElement(".filter__ingredients--list"), ingredients);
//   });
// };

// displayIngredientsList();

// //display appliance list
// const displayAppliancesList = () => {
//   //get the form and the input
//   const form = getElement(".search__input-appliances");
//   const nameInput = getElement("#appliances-input");

//   // list of ingredients
//   const recipes = getStorageItem("recipes");

//   //recuperer la valeur de l'input et afficher la liste des ingrédients
//   form.addEventListener("keyup", function () {
//     //get the value of the input
//     const value = nameInput.value;
//     //filter the data based on the value of the input
//     const appliances = applianceListToFilter(recipes, value);
//     //display filtered data in the receipes container
//     appliancesList(getElement(".filter__appliances--list"), appliances);
//   });
// };

// displayAppliancesList();

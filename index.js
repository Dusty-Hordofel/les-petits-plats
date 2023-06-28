import { setFilterButton } from "./components/setFilterButtons.js";
import {
  ingredientsList,
  appliancesList,
  ustensilsList,
} from "./components/ingredients_list.js";

//store data to the local storage
const storeData = async () => {
  const recipes = await getRecipesData();
  setStorageItem("recipes", recipes);
};
storeData();

//retrieve stored data in the localStorage or from local data
const recipes = getStorageItem("recipes");

//DONE: Afficher le button de filtrage des ingrédients
const displayIngredientsFilterButton = () => {
  //mettre en place le button de filtrage des ingrédients
  setFilterButton(
    getElement(".filter__ingredients"),
    "ingredients",
    "Ingredients"
  );
  //ajouter un écouteur d'évenement sur le bouton ingrédients (flêche vers le bas)
  getElement(".filter__ingredients__title--icon--down").addEventListener(
    "click",
    arrowDown
  );
  //ajouter un écouteur d'évenement sur le bouton ingrédients (flêche vers le haut)
  getElement(".filter__ingredients__title--icon--up").addEventListener(
    "click",
    arrowUp
  );
};
displayIngredientsFilterButton();

//DONE: Afficher le button de filtrage des appareils
const displayAppliancesFilterButton = () => {
  //mettre en place le button de filtrage des appareils
  setFilterButton(getElement(".filter__appliances"), "appliances", "Appareils");
  //ajouter un écouteur d'évenement sur le bouton appareils (flêche vers le bas)
  getElement(".filter__appliances__title--icon--down").addEventListener(
    "click",
    arrowApplianceDown
  );
  //ajouter un écouteur d'évenement sur le bouton appareils (flêche vers le haut)
  getElement(".filter__appliances__title--icon--up").addEventListener(
    "click",
    arrowApplianceUp
  );
};
displayAppliancesFilterButton();

//DONE: Afficher le button de filtrage des ustensils
const displayUstensilsFilterButton = () => {
  //mettre en place le button de filtrage des ustensils
  setFilterButton(getElement(".filter__ustensils"), "ustensils", "Ustensiles");
  //ajouter un écouteur d'évenement sur le bouton ustensils (flêche vers le bas)
  getElement(".filter__ustensils__title--icon--down").addEventListener(
    "click",
    arrowUstensilDown
  );
  //ajouter un écouteur d'évenement sur le bouton ustensils (flêche vers le haut)
  getElement(".filter__ustensils__title--icon--up").addEventListener(
    "click",
    arrowUstensilUp
  );
};
displayUstensilsFilterButton();

//display the list of recipes
const displayRecipes = () => {
  setRecipesCards(getElement("#recipes"), recipes);
};
displayRecipes();

//afficher la liste des ingrédients dans le DOM: affichage initial sans filtre
const displayRetrievedIngredients = () => {
  /*set*/ ingredientsList(
    getElement(".filter__ingredients--list"),
    ingredientsArray(recipes)
  );
  // );
  // const ingredients = ingredientsArray(recipes);
  //display filtered data in the receipes container
  // ingredientsList(getElement(".filter__ingredients--list"), ingredients);
};

displayRetrievedIngredients();

//afficher la liste des ingrédients dans le DOM: affichage initial avec ou sans filtre
const displayIngredientsList = () => {
  //get the form and the input
  const form = getElement(".search__input-ingredients");
  const nameInput = getElement("#ingredients-input");

  //recuperer la valeur de l'input et afficher la liste des ingrédients
  form.addEventListener("keyup", function () {
    //get the value of the input
    const value = nameInput.value;
    //filter the data based on the value of the input
    const ingredients = ingredientsArray(recipes, value);
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
    appliancesArray(recipes)
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
  const recipes = getStorageItem("recipes");

  //recuperer la valeur de l'input et afficher la liste des ingrédients
  form.addEventListener("keyup", function () {
    //get the value of the input
    const value = nameInput.value;
    //filter the data based on the value of the input
    const appliances = appliancesArray(recipes, value);
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
    ustensilsArray(recipes)
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
  const recipes = getStorageItem("recipes");

  //recuperer la valeur de l'input et afficher la liste des ingrédients
  form.addEventListener("keyup", function () {
    //get the value of the input
    const value = nameInput.value;
    //filter the data based on the value of the input
    const ustensils = ustensilsArray(recipes, value);
    //display filtered data in the receipes container
    appliancesList(getElement(".filter__ustensils--list"), ustensils);
  });
};

displayUstensilsList();

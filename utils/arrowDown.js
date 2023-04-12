// import { getElement } from "./utils.js";

const arrowDown = () => {
  console.log("tu cliques sur la flèche");

  //hide the ingredient button
  getElement(".filter__ingredients__title").style.display = "none";
  //display ingredients input
  getElement("#ingredients-input").style.display = "block";
  //add focus on ingredients  input
  getElement("#ingredients-input").focus();
  //display the arrow up
  getElement("#filter__ingredients__title--icon--up").style.display = "block";
  //expand the ingredients container
  getElement(".filter__ingredients--container").style.width = "667px";
  //display the list of ingredients
  getElement(".filter__ingredients--list").style.display = "flex";
  // show search input
  // show the list of ingredients
  //display the list of ingredients
};

const arrowUp = () => {
  console.log("tu cliques sur la flèche");

  //show the ingredient's button
  getElement(".filter__ingredients__title").style.display = "flex";
  //hide ingredient's input search
  getElement("#ingredients-input").style.display = "none";
  //hide the arrow up
  getElement("#filter__ingredients__title--icon--up").style.display = "none";
  //reduce the ingredients container
  getElement(".filter__ingredients--container").style.width = "17rem";
  //display the list of ingredients
  getElement(".filter__ingredients--list").style.display = "none";
  // show search input
  // show the list of ingredients
  //display the list of ingredients
};

//tags already selected
let ingredientTagAlreadyAdded = false;

//tags container
const ingredientTag = document.querySelector(".ingredients__tag");
const applianceTag = document.querySelector(".appliances__tag");
const ustensilTag = document.querySelector(".ustensils__tag");

//Add tags
const addTag = (recipeId) => {
  console.log("🚀 ~ file: arrowDown.js:51 ~ addTag ~ recipeId:", recipeId);
  // console.log("Hello People", index);
  console.log(" 3333");
  const filterItemIngredients = document.getElementById(recipeId);
  console.log(
    "🚀 ~ file: index.js:59 ~ test ~ filterItemIngredients:",
    filterItemIngredients
  );

  const tagIngredientContainer = document.createElement("div");
  tagIngredientContainer.setAttribute("class", "ingredient__tag");

  const tagIngredient = document.createElement("li");
  tagIngredient.innerText = filterItemIngredients.innerText;
  tagIngredient.classList.add("blue__tag");

  //create the delete icon
  const deleteTagIcon = document.createElement("span");
  deleteTagIcon.classname = "deleteIcon";

  const deleteIconImg = document.createElement("span");
  deleteIconImg.className = "fa-regular fa-circle-xmark";
  deleteIconImg.style.cursor = "pointer";
  deleteIconImg.style.width = "20px";
  //remove the tag
  deleteIconImg.addEventListener("click", () => {
    tagIngredientContainer.remove();
    // liveSearch();
    // filteredRecipesWithTags(getStorageItem("recipes"));
    recipesCards(
      getElement("#recipes"),
      filteredRecipesWithTags(getStorageItem("recipes"))
    );
    return false;
  });

  ingredientTag.appendChild(tagIngredientContainer);
  tagIngredientContainer.appendChild(tagIngredient);
  tagIngredientContainer.appendChild(deleteTagIcon);
  deleteTagIcon.appendChild(deleteIconImg);
  // liveSearch();
  recipesCards(
    getElement("#recipes"),
    filteredRecipesWithTags(getStorageItem("recipes"))
  );
  // filteredRecipesWithTags(getStorageItem("recipes"));
};

// FILTERED RECIPES WITH TAGS
const filteredRecipesWithTags = (recipesToFilter) => {
  /* Faire des tableaux des items afficher pour chaque filtre */
  const taggedIngredientsDOM = Array.from(
    document.querySelectorAll(".ingredients__tag .ingredient__tag .blue__tag")
  );
  console.log(
    "🚀 ~ file: arrowDown.js:100 ~ filteredRecipesWithTags ~ taggedIngredientsDOM:",
    taggedIngredientsDOM
  );

  let recipesToDisplay = []; // array of recipes to display
  let taggedIngredients = []; // array of ingredients to filter

  // create an array of text of tagged ingredients using the array of DOM elements
  taggedIngredients = taggedIngredientsDOM.map(
    (taggedIngredient) => taggedIngredient.innerText
  );
  console.log(
    "🚀 ~ file: arrowDown.js:111 ~ filteredRecipesWithTags ~ taggedIngredients:",
    taggedIngredients
  );

  //array of recipes to filter : recipesToFilter is the array of recipes to filter we get from the API
  recipesToDisplay = recipesToFilter.filter((recipe) => {
    let recipeIsMatching = false;
    let ingredientIsMatching = false;

    let ingredientsMatching = 0;

    let ingredientsInTheRecipe = [];

    // get all the ingredients in the recipe:we will have list of ingredients
    ingredientsInTheRecipe = recipe.ingredients.map(({ ingredient }) => {
      return ingredient;
    });
    console.log(
      "🚀 ~ file: arrowDown.js:129 ~ recipesToDisplay=recipesToFilter.filter ~ ingredientsInTheRecipe:",
      ingredientsInTheRecipe
    );

    // check if ingredientsInTheRecipe contains tagged ingredients and count them
    if (taggedIngredients.length > 0) {
      taggedIngredients.forEach((taggedIngredient) => {
        console.log(
          "🚀 ~ file: arrowDown.js:138 ~ taggedIngredients.forEach ~ ingredientsMatching:",
          ingredientsMatching,
          ingredientsInTheRecipe
        );
        if (ingredientsInTheRecipe.includes(taggedIngredient)) {
          console.log(
            "🚀 ~ file: arrowDown.js:144 ~ taggedIngredients.forEach ~ ingredientsMatching:",
            ingredientsMatching,
            ingredientsInTheRecipe
          );
          ingredientsMatching += 1;
        }
      });
    }

    // if all the tagged ingredients are in the recipe, the recipe is matching
    if (ingredientsMatching === taggedIngredients.length) {
      ingredientIsMatching = true;
    }

    // if the recipe is matching, we add it to the array of recipes to display
    if (ingredientIsMatching === true) {
      recipeIsMatching = true;
    }
    return recipeIsMatching;
  });
  filterAll(recipesToDisplay);
  console.log(
    "🚀 ~ file: arrowDown.js:170 ~ filteredRecipesWithTags ~ recipesToDisplay:",
    recipesToDisplay
  );
  return recipesToDisplay;
};
// filteredRecipesWithTags();

const filterAll = (recipes) => {
  const ingredientsListDOM = document.querySelector(
    ".recipe__list__container--items"
  );

  const ingredientsList = [];
  //vider la liste des ingredients à chaque ajout de tag
  ingredientsListDOM.innerHTML = "";

  recipes.map((recipe) => {
    //gestion des ingredients
    //si l'ingrédient existe déjà , on ne l'ajoute pas
    const ingredientsTag = [
      ...document.querySelectorAll(".ingredient__tag"),
    ].map((itag) => itag.innerText);
    console.log(
      "🚀 ~ file: arrowDown.js:200 ~ recipes.map ~ ingredientsTag:",
      ingredientsTag
    );
    //map sur les ingredients de la recette
    recipe.ingredients.map(({ ingredient }, index) => {
      //si l'ingrédient n'est pas dans le tableau des tags et n'est pas dans le tableau des ingredients
      if (
        !ingredientsTag.includes(ingredient) &&
        !ingredientsList.includes(ingredient)
      ) {
        //ajout de l'ingrédient dans le tableau des ingredients
        ingredientsList.push(ingredient);
        //ajout de l'ingrédient dans la liste des ingredients
        const ingredientItem = document.createElement("li");
        ingredientItem.className = "recipe__container--item";
        ingredientItem.setAttribute("key", index);
        ingredientItem.innerText = ingredient;
        ingredientItem.setAttribute("id", ingredientItem.textContent);
        ingredientsListDOM.appendChild(ingredientItem);
        ingredientItem.addEventListener("click", () => {
          addTag(ingredientItem.textContent);
        });
      }
    });
  });
};

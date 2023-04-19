// import { getElement } from "./utils.js";

const arrowDown = (e) => {
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
  getElement(".filter__ingredients--container").style.height = "auto";
  //remove expanded class to another input
  getElement(".filter__appliances--container").style.width = "17rem";
  getElement(".filter__ustensils--container").style.width = "17rem";
  //reduce the appliances input container
  arrowApplianceUp();
  //reduce the ustensils input container
  arrowUstensilUp();
};

const arrowUp = (event) => {
  //show the ingredient's button
  getElement(".filter__ingredients__title").style.display = "flex";
  //hide ingredient's input search
  getElement("#ingredients-input").style.display = "none";
  //hide the arrow up
  getElement("#filter__ingredients__title--icon--up").style.display = "none";
  //reduce the ingredients container
  getElement(".filter__ingredients--container").style.width = "17rem";
  getElement(".filter__ingredients--container").style.height = "6.9rem";
};

const arrowApplianceDown = () => {
  console.log("tu cliques sur la flèche");

  //hide the appliance button
  getElement(".filter__appliances__title").style.display = "none";
  //display appliances input
  getElement("#appliances-input").style.display = "block";
  //add focus on appliances  input
  getElement("#appliances-input").focus();
  //display the arrow up
  getElement("#filter__appliances__title--icon--up").style.display = "block";
  //expand the appliances container
  getElement(".filter__appliances--container").style.width = "667px";
  getElement(".filter__appliances--container").style.height = "auto";
  //reduce the appliances input container
  arrowUp();
  //reduce the ustensils input container
  arrowUstensilUp();
};

const arrowApplianceUp = () => {
  console.log("tu cliques sur la flèche");

  //show the appliance's button
  getElement(".filter__appliances__title").style.display = "flex";
  //hide appliance's input search
  getElement("#appliances-input").style.display = "none";
  //hide the arrow up
  getElement("#filter__appliances__title--icon--up").style.display = "none";
  //reduce the appliances container
  getElement(".filter__appliances--container").style.width = "17rem";
  getElement(".filter__appliances--container").style.height = "6.9rem";
  // show the list of appliances
  //display the list of appliances
};

const arrowUstensilDown = () => {
  console.log("tu cliques sur la flèche");

  //hide the ustensil button
  getElement(".filter__ustensils__title").style.display = "none";
  //display ustensils input
  getElement("#ustensils-input").style.display = "block";
  //add focus on ustensils  input
  getElement("#ustensils-input").focus();
  //display the arrow up
  getElement("#filter__ustensils__title--icon--up").style.display = "block";
  //expand the ustensils container
  getElement(".filter__ustensils--container").style.width = "667px";
  getElement(".filter__ustensils--container").style.height = "auto";
  //display the list of ustensils
  getElement(".filter__ingredients--container").style.width = "17rem";
  getElement(".filter__appliances--container").style.width = "17rem";
  //reduce the appliances input container
  arrowUp();
  //reduce the ingredients input container
  arrowApplianceUp();
};

const arrowUstensilUp = () => {
  console.log("tu cliques sur la flèche");

  //show the ustensil's button
  getElement(".filter__ustensils__title").style.display = "flex";
  //hide ustensil's input search
  getElement("#ustensils-input").style.display = "none";
  //hide the arrow up
  getElement("#filter__ustensils__title--icon--up").style.display = "none";
  //reduce the ustensils container
  getElement(".filter__ustensils--container").style.width = "17rem";
  getElement(".filter__ustensils--container").style.height = "6.9rem";
  // show the list of ustensils
  //display the list of ustensils
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
    // searchLive();
    // recipesCards(
    //   getElement("#recipes"),
    //   filteredRecipesWithTags(getStorageItem("recipes"))
    // );
    searchFilter(getStorageItem("recipes"));
    return false;
  });

  ingredientTag.appendChild(tagIngredientContainer);
  tagIngredientContainer.appendChild(tagIngredient);
  tagIngredientContainer.appendChild(deleteTagIcon);
  deleteTagIcon.appendChild(deleteIconImg);
  // liveSearch();
  // searchLive();
  searchFilter(getStorageItem("recipes"));
  // searchFilter(getStorageItem("recipes"));

  // recipesCards(
  //   getElement("#recipes"),
  //   filteredRecipesWithTags(getStorageItem("recipes"))
  // );
  // filterSearch(recipes);
  // const recipes = getStorageItem("recipes");
  // filterSearch(recipes);
  // filteredRecipesWithTags(getStorageItem("recipes"));
};

//FAIT: Obtenir la liste des recettes filtrées par les tags
const filteredRecipesWithTags = (recipesToFilter) => {
  // Faire des tableaux en récupérant la liste de chaque élément via le DOM
  const taggedIngredientsDOM = Array.from(
    document.querySelectorAll(".ingredients__tag .ingredient__tag .blue__tag")
  );

  const taggedAppliancesDOM = Array.from(
    document.querySelectorAll(".appliances__tag .appliance__tag .green__tag")
  );
  const taggedustensilsDOM = Array.from(
    document.querySelectorAll(".ustensils__tag .ustensil__tag .red__tag")
  );

  let recipesToDisplay = []; // array of recipes to display
  let taggedIngredients = []; // array of ingredients to filter
  let taggedAppliances = [];
  let taggedUstensils = [];

  //créer un tableau de texte des ingrédients taggés en utilisant le tableau d'éléments du DOM
  taggedIngredients = taggedIngredientsDOM.map(
    (taggedIngredient) => taggedIngredient.innerText
  );
  console.log(
    "🚀 ~ file: arrowDown.js:194 ~ filteredRecipesWithTags ~ taggedIngredients:",
    taggedIngredients
  );
  //création de la liste des tags des appareils grace  aux éléments du DOM (taggedAppliancesDOM)
  taggedAppliances = taggedAppliancesDOM.map(
    (taggedAppliance) => taggedAppliance.innerText
  );

  //création de la liste des tags des ustensiles grace  aux éléments du DOM (taggedustensilsDOM)
  taggedUstensils = taggedustensilsDOM.map(
    (taggedUstensil) => taggedUstensil.innerText
  );
  console.log(
    "🚀 ~ file: arrowDown.js:203 ~ filteredRecipesWithTags ~ taggedUstensils:",
    taggedUstensils
  );

  //liste des recettes filtrés grace aux tags des ingredients, des appareils et des ustensiles
  recipesToDisplay = recipesToFilter.filter((recipe) => {
    let recipeIsMatching = false;
    let ingredientIsMatching = false;
    let applianceIsMatching = false;
    let ustensilIsMatching = false;

    let ingredientsMatching = 0;
    let appliancesMatching = 0;
    let ustensilsMatching = 0;

    let ingredientsInTheRecipe = [];
    let appliancesInTheRecipe = [];
    let ustensilsInTheRecipe = [];

    //Obtenir la liste de tous les ingrédients contenu dans les recettes grace à  list des recettes en paramètre
    ingredientsInTheRecipe = recipe.ingredients.map(({ ingredient }) => {
      return ingredient;
    });
    // console.log(
    //   "🚀 ~ file: arrowDown.js:223 ~ ingredientsInTheRecipe=recipe.ingredients.map ~ ingredientsInTheRecipe:",
    //   ingredientsInTheRecipe
    // );
    //Obtenir la liste de tous les appareils contenu dans les recettes grace à  list des recettes en paramètre
    appliancesInTheRecipe.push(recipe.appliance);

    //Obtenir la liste de tous les ustensiles contenu dans les recettes grace à  list des recettes en paramètre
    ustensilsInTheRecipe = recipe.ustensils.map((ustensil) => ustensil);

    //vérifier si l'ingrédient de la recette est contenu dans le tableau des tags des ingrédients
    // check if ingredientsInTheRecipe contains tagged ingredients and count them
    if (taggedIngredients.length > 0) {
      taggedIngredients.forEach((taggedIngredient) => {
        if (ingredientsInTheRecipe.includes(taggedIngredient)) {
          ingredientsMatching += 1;
        }
      });
    }
    //si le tableau des tags des appareils contient un ou des appareils, on vérifie que les appareils des recettes contiennent les tags des appareils
    if (taggedAppliances.length > 0) {
      taggedAppliances.forEach((taggedAppliance) => {
        if (appliancesInTheRecipe.includes(taggedAppliance)) {
          appliancesMatching += 1;
        }
      });
    }
    //si le tableau des tags des ustensiles contient un ou des ustensiles, on vérifie que les ustensiles des recettes contiennent les tags des ustensiles
    if (taggedUstensils.length > 0) {
      taggedUstensils.forEach((taggedUstensil) => {
        if (ustensilsInTheRecipe.includes(taggedUstensil)) {
          ustensilsMatching += 1;
          console.log(
            "🚀 ~ file: arrowDown.js:263 ~ taggedUstensils.forEach ~ ustensilsMatching:",
            ustensilsMatching
          );
        }
      });
    }

    // if all the tagged ingredients are in the recipe, the recipe is matching
    if (ingredientsMatching === taggedIngredients.length) {
      ingredientIsMatching = true;
    }

    //si le tableau des tags n'est pas vide et que le nombre d'appareils des recettes correspondant aux tags est supérieur à 0, alors applianceIsMatching = true
    if (taggedAppliances.length > 0) {
      if (appliancesMatching > 0) {
        applianceIsMatching = true;
      }
    } else applianceIsMatching = true;
    //si le nombre d'ustensils taggés est égal au nombre d'ustensils des recettes correspondant aux tags, alors ustensilIsMatching = true
    if (ustensilsMatching === taggedUstensils.length) {
      ustensilIsMatching = true;
    }

    // if the recipe is matching, we add it to the array of recipes to display
    if (
      ingredientIsMatching === true &&
      applianceIsMatching === true &&
      ustensilIsMatching === true
    ) {
      recipeIsMatching = true;
    }
    return recipeIsMatching;
  });
  filterAll(recipesToDisplay);
  console.log(
    "🚀 ~ file: arrowDown.js:284 ~ filteredRecipesWithTags ~ recipesToDisplay:",
    recipesToDisplay
  );
  return recipesToDisplay;
};
// filteredRecipesWithTags();

//FAIT: Empecher l'ajout de tags identiques,mettre à jour la liste (recettes, ingredients, appareils, ustensiles) à chaque ajout de tag, afficher les recettes filtrées
const filterAll = (recipes) => {
  //récupération de la liste des ingredients, des appareils et des ustensiles
  const ingredientsListDOM = document.querySelector(
    ".recipe__list__container--items"
  );
  const appliancesListDOM = document.querySelector(
    ".appliance__list__container--items"
  );

  const ustensilsListDOM = document.querySelector(
    ".ustensil__list__container--items"
  );
  // console.log(
  //   "🚀 ~ file: arrowDown.js:329 ~ filterAll ~ ustensilsListDOM:",
  //   ustensilsListDOM
  // );

  const ingredientsList = [];
  const appliancesList = [];
  const ustensilsList = [];

  //vider la liste des ingredients à chaque ajout de tag
  ingredientsListDOM.innerHTML = "";
  appliancesListDOM.innerHTML = "";
  ustensilsListDOM.innerHTML = "";

  recipes.map((recipe) => {
    //gestion des ingredients
    //si l'ingrédient existe déjà , on ne l'ajoute pas
    const ingredientsTag = [
      ...document.querySelectorAll(".ingredient__tag"),
    ].map((itag) => itag.innerText);
    console.log(
      "🚀 ~ file: arrowDown.js:335 ~ recipes.map ~ ingredientsTag:",
      ingredientsTag
    );

    //map sur les ingredients de la recette
    recipe.ingredients.map(({ ingredient }, index) => {
      console.log(
        "🚀 ~ file: arrowDown.js:334 ~ recipe.ingredients.map ~ ingredient:",
        recipe.ingredients
      );
      //si l'ingrédient n'est pas dans le tableau des tags et n'est pas dans le tableau des ingredients
      if (
        !ingredientsTag.includes(ingredient) &&
        !ingredientsList.includes(ingredient)
      ) {
        //ajout de l'ingrédient dans le tableau des ingredients
        ingredientsList.push(ingredient);
        console.log(
          "🚀 ~ file: arrowDown.js:345 ~ recipe.ingredients.map ~ ingredientsList:",
          ingredientsList
        );

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

    //gestion des appareils
    //si l'appareil existe déjà , on ne l'ajoute pas
    const appliancesTag = [...document.querySelectorAll(".appliance__tag")].map(
      (applianceTag) => applianceTag.innerText
    );
    console.log(
      "🚀 ~ file: arrowDown.js:364 ~ recipes.map ~ ingredientsTag:",
      appliancesTag,
      appliancesList
    );
    //si l'appareil n'est pas dans le tableau des tags et n'est pas dans le tableau des appareils, on l'ajoute
    if (
      !appliancesList.includes(recipe.appliance) &&
      !appliancesTag.includes(recipe.appliance)
    ) {
      //ajout de l'appareil dans le tableau des appareils
      appliancesList.push(recipe.appliance);
      //ajout de l'appareil dans la liste des appareils
      const applianceItem = document.createElement("li");
      applianceItem.classList.add("appliance__container--item");
      // applianceItem.setAttribute("key", index);
      applianceItem.setAttribute("id", recipe.appliance);
      applianceItem.innerText = recipe.appliance;
      appliancesListDOM.appendChild(applianceItem);
      console.log(applianceItem);
      applianceItem.addEventListener("click", () => {
        addApplianceTag(applianceItem.textContent);
      });
    }

    //gestion des ustensiles
    //Si l'ustensile existe déjà , on ne l'ajoute pas
    const ustensilsTag = [...document.querySelectorAll(".ustensil__tag")].map(
      (utag) => utag.innerText
    );
    console.log(
      "🚀 ~ file: arrowDown.js:400 ~ recipes.map ~ ustensilsTag:",
      ustensilsTag
    );

    //si l'ustensile n'est pas dans le tableau des tags et n'est pas dans le tableau des ustensiles, on l'ajoute
    recipe.ustensils.forEach((ustensil) => {
      if (
        !ustensilsList.includes(ustensil) &&
        !ustensilsTag.includes(ustensil)
      ) {
        ustensilsList.push(ustensil);
        const ustensilItem = document.createElement("li");
        ustensilItem.classList.add("filter__ustensils--items");
        ustensilItem.innerText = ustensil;
        ustensilItem.setAttribute("id", ustensil);
        // ustensilsBloc.appendChild(filterItem);
        ustensilsListDOM.appendChild(ustensilItem);
        console.log(ustensilItem);
        ustensilItem.addEventListener("click", () => {
          addUstensilTag(ustensilItem.textContent);
        });
      }
    });
  });
};

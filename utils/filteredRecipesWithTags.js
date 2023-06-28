//FAIT: Obtenir la liste des recettes filtrées par les tags
const filteredRecipesWithTags = (recipesToFilter) => {
  // Faire des tableaux en récupérant la liste de chaque élément via le DOM
  const taggedIngredientsDOM = Array.from(
    getAllElement(".ingredients__tag .ingredient__tag .blue__tag")
  );

  const taggedAppliancesDOM = Array.from(
    getAllElement(".appliances__tag .appliance__tag .green__tag")
  );
  const taggedustensilsDOM = Array.from(
    getAllElement(".ustensils__tag .ustensil__tag .red__tag")
  );

  let recipesToDisplay = []; //liste des ingrédients à afficher
  let taggedIngredients = []; // liste des tags des ingrédients
  let taggedAppliances = []; // liste des tags des appareils
  let taggedUstensils = []; // liste des tags des ustensiles

  //créer un tableau de texte des ingrédients taggés en utilisant le tableau d'éléments du DOM
  taggedIngredients = taggedIngredientsDOM.map(
    (taggedIngredient) => taggedIngredient.innerText
  );

  //création de la liste des tags des appareils grace  aux éléments du DOM (taggedAppliancesDOM)
  taggedAppliances = taggedAppliancesDOM.map(
    (taggedAppliance) => taggedAppliance.innerText
  );

  //création de la liste des tags des ustensiles grace  aux éléments du DOM (taggedustensilsDOM)
  taggedUstensils = taggedustensilsDOM.map(
    (taggedUstensil) => taggedUstensil.innerText
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
    const ingredientsTag = [...getAllElement(".ingredient__tag")].map(
      (itag) => itag.innerText
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

    //gestion des appareils
    //si l'appareil existe déjà , on ne l'ajoute pas
    const appliancesTag = [...getAllElement(".appliance__tag")].map(
      (applianceTag) => applianceTag.innerText
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
      // console.log(applianceItem);
      applianceItem.addEventListener("click", () => {
        addApplianceTag(applianceItem.textContent);
      });
    }

    //gestion des ustensiles
    //Si l'ustensile existe déjà , on ne l'ajoute pas
    const ustensilsTag = [...getAllElement(".ustensil__tag")].map(
      (utag) => utag.innerText
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
        // console.log(ustensilItem);
        ustensilItem.addEventListener("click", () => {
          addUstensilTag(ustensilItem.textContent);
        });
      }
    });
  });
};

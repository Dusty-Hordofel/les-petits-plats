let form = getElement(".search__input-container");
let searchInput = getElement(".search__input");
const recipesElement = getElement("#recipes");

const searchFilter = (recipes) => {
  let tagsUsed = false;
  recipesToDisplay = [];
  let inputValue;

  //selectionner tous les tags par type
  const allIngredientTags = document.querySelectorAll(
    ".ingredients__tag .ingredient__tag .blue__tag"
  );
  const allApplianceTags = document.querySelectorAll(
    ".appliances__tag .appliance__tag .green__tag"
  );
  const allUstensilTags = document.querySelectorAll(
    ".ustensils__tag .ustensil__tag .red__tag"
  );

  // Retourne un tableau 'recipeToDisplay' qui suit les règles de ma regex.
  if (searchInput.value.length > 2) {
    inputValue = searchInput.value.toLowerCase();

    // console.log(recipes);
    recipesToDisplay = recipes.filter((recipe) => {
      let { name, appliance, ingredients, description, ustensils } = recipe;

      //verifier si le nom de la recette est inclus dans l'input
      let isNameIncludedInReceipe = name.toLowerCase().includes(inputValue);

      //verifier si le nom du materiel est inclu dans l'input
      appliance = appliance.toLowerCase().includes(inputValue);
      //verifier si le nom saisie est inclu dans la description
      description = description.toLowerCase().includes(inputValue);

      //verifier si la valeur saisie correspond à l'ustensile
      ustensils = ustensils.includes(inputValue) ? inputValue : "";
      console.log(
        "🚀 ~ file: search.js:39 ~ recipesToDisplay=recipes.filter ~ ustensils:",
        ustensils
      );

      //mettre les ingrédients dans un tableau et vérifier si la valeur de l'input est incluse dans chacun des tableaux
      ingredients = ingredients
        .map((ingredient) => {
          return ingredient.ingredient.toLowerCase();
        })
        .includes(inputValue)
        ? inputValue
        : "";

      //renvoi la recette s'il y a une correspondance

      let recipeIsMatching = false;
      if (
        isNameIncludedInReceipe ||
        appliance ||
        description ||
        ustensils ||
        ingredients
      ) {
        recipeIsMatching = true;
      }

      return recipeIsMatching;
    });

    /* Remplir les filtres avec le tableau retourné par recipesToDisplay*/
    filterAll(recipesToDisplay);
  }
  console.log(Array.from(allIngredientTags));
  // Si l'un des tableaux comporte des éléments , un tag est utilisé.On utilse dans ce cas le tableau 'recipesToDisplay' pour afficher les recettes avec recipesToDisplay comme source de données.
  if (
    Array.from(allIngredientTags).length > 0 ||
    Array.from(allApplianceTags).length > 0 ||
    Array.from(allUstensilTags).length > 0
  ) {
    tagsUsed = true;
    if (recipesToDisplay.length > 0) {
      recipesToDisplay = filteredRecipesWithTags(recipesToDisplay);
    } else {
      recipesToDisplay = filteredRecipesWithTags(recipes);
    }
  }

  // SI aucune recherche ne correspond à la regex, on affiche un message d'erreur.
  if (recipesToDisplay.length > 0) {
    recipesElement.innerHTML = "";
    // displayData(recipesToDisplay);
    setRecipesCards(recipesElement, recipesToDisplay);
  } else {
    // displayData(recipesToDisplay);
    setRecipesCards(recipesElement, recipesToDisplay);
    recipesElement.innerHTML = `<h3 class="filter-error">
    Désolé, aucune recette ne correspond à votre recherche
    </h3>`;
  }

  // Si la barre de recherche est vide ou moins de 3 caractères.
  if (
    (searchInput.value === "" || searchInput.value.length < 3) &&
    tagsUsed === false
  ) {
    filterAll(recipes);
    console.log(filterAll(recipes));
    setRecipesCards(recipesElement, recipes);
  }
};

searchInput.addEventListener("keyup", () => {
  searchFilter(getStorageItem("recipes"));
});

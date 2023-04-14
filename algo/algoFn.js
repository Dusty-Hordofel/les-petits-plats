// list of ingredients
const ingredientsListToFilter = (data, inputValue) => {
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

  // Si on a un element dans l'input, on filtre les ingrédients
  if (inputValue) {
    return ingredients.filter((ingredient) =>
      ingredient.includes(inputValue.toLowerCase().trim())
    );
  }
  // Sinon on retourne tous les ingrédients
  return ingredients;
};
// console.log(
//   "🚀 ~ file: algoFn.js:26 ~ ingredientsListToFilter ~ ingredientsListToFilter:",
//   ingredientsListToFilter(getStorageItem("recipes"))
// );

// list of APPLIANCE
const applianceListToFilter = (data, inputValue) => {
  const appliances = [
    ...new Set(
      data.map((recipe) => recipe.appliance.toLowerCase().trim()).sort()
    ),
  ];

  // Si on a un element dans l'input, on filtre les ingrédients
  if (inputValue) {
    return appliances.filter((ingredient) =>
      ingredient.includes(inputValue.toLowerCase().trim())
    );
  }
  // Sinon on retourne tous les ingrédients
  return appliances;
};
// console.log(
//   "🚀 ~ file: algoFn.js:49 ~ applianceListToFilter ~ applianceListToFilter:",
//   applianceListToFilter(getStorageItem("recipes"))
// );

// list of USTENSILS
const ustensilsListToFilter = (data, inputValue) => {
  const ustensils = [
    ...new Set(
      data
        .map((recipe) =>
          recipe.ustensils.map((item) => item.toLowerCase().trim())
        )
        .flat()
        .sort()
    ),
  ];

  // Si on a un element dans l'input, on filtre les ingrédients
  if (inputValue) {
    return ustensils.filter((ingredient) =>
      ingredient.includes(inputValue.toLowerCase().trim())
    );
  }
  // Sinon on retourne tous les ingrédients
  return ustensils;
};

// console.log(
//   "🚀 ~ file: algoFn.js:76 ~ ustensilsListToFilter ~ ustensilsListToFilter:",
//   ustensilsListToFilter(getStorageItem("recipes"))
// );

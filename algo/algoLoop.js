let ingredientsArray = (recipes, inputValue) => {
  let allIngredients = [];
  let ingredientInput = inputValue;
  // let ingredientInput = inputValue.toLowerCase().trim();

  for (const recipe of recipes) {
    for (const ingredient of recipe.ingredients) {
      let currentIngredient = ingredient.ingredient.toLowerCase().trim();
      if (allIngredients.length === 0) {
        allIngredients.push(currentIngredient);
      } else {
        let isKeywordIn = false;
        for (const itemInIngredients of allIngredients) {
          if (itemInIngredients === currentIngredient) {
            isKeywordIn = true;
          }
        }
        if (!isKeywordIn) {
          allIngredients.push(currentIngredient);
        }
      }
    }
  }

  // Si on a un element dans l'input, on filtre les ingrédients
  if (inputValue) {
    return allIngredients.filter((ingredient) =>
      ingredient.includes(ingredientInput.toLowerCase().trim())
    );
  }
  // Sinon on retourne tous les ingrédients
  return allIngredients;
};

let ustensilsArray = (recipes, inputValue) => {
  let allUstensils = [];
  let ustensilInput = inputValue;
  // let ustensilInput = inputValue.toLowerCase().trim();

  for (const recipe of recipes) {
    for (const ustensil of recipe.ustensils) {
      let currentUstensil = ustensil.toLowerCase().trim();
      if (allUstensils.length === 0) {
        allUstensils.push(currentUstensil);
      } else {
        let isKeywordIn = false;
        for (const itemInUstensils of allUstensils) {
          if (itemInUstensils === currentUstensil) {
            isKeywordIn = true;
          }
        }
        if (!isKeywordIn) {
          allUstensils.push(currentUstensil);
        }
      }
    }
  }

  // Si on a un element dans l'input, on filtre les ustensils
  if (inputValue) {
    return allUstensils.filter((ustensil) =>
      ustensil.includes(ustensilInput.toLowerCase().trim())
    );
  }
  // Sinon on retourne tous les ustensils
  return allUstensils;
};
// console.log(
//   "🚀 ~ file: algoLoop.js:81 ~ ustensilsArray ~ ustensilsArray:",
//   ustensilsArray(allRecipesData)
// );

console.log("🚀 ~ file: algoLoop.js:102 ~ allRecipesData:", allRecipesData);

let appliancesArray = (recipes, inputValue) => {
  let allAppliances = [];
  let applianceInput = inputValue;

  for (const recipe of recipes) {
    const currentAppliance = recipe.appliance.toLowerCase().trim();
    if (allAppliances.length === 0) {
      allAppliances.push(currentAppliance);
    } else {
      let isKeywordIn = false;
      for (const itemInUstensils of allAppliances) {
        if (itemInUstensils === currentAppliance) {
          isKeywordIn = true;
        }
      }
      if (!isKeywordIn) {
        allAppliances.push(currentAppliance);
      }
    }
  }

  // Si on a un element dans l'input, on filtre les ustensils
  if (inputValue) {
    return allAppliances.filter((ustensil) =>
      ustensil.includes(applianceInput.toLowerCase().trim())
    );
  }
  // Sinon on retourne tous les ustensils
  return allAppliances;
};
console.log(
  "🚀 ~ file: algoLoop.js:166 ~ appliancesArray ~ appliancesArray:",
  appliancesArray(allRecipesData)
);

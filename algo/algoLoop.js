let ingredientsArray = (recipes, inputValue) => {
  // console.log(recipes);
  let allIngredients = [];
  //   let ingredientInput = inputValue.toLowerCase().trim();

  for (const recipe of recipes) {
    // console.log(recipe);
    for (const ingredient of recipe.ingredients) {
      let currentIngredient = ingredient.ingredient.toLowerCase().trim();
      // console.log(currentIngredient);
      if (allIngredients.length === 0) {
        allIngredients.push(currentIngredient);
      } else {
        let isIn = false;
        for (const itemInIngredients of allIngredients) {
          if (itemInIngredients === currentIngredient) {
            isIn = true;
          }
        }
        if (!isIn) {
          allIngredients.push(currentIngredient);
        }
      }
    }
  }

  // SI RECHERCHE DANS INPUT....
  //   if (inputValue) {
  //     return allIngredients.filter((ingredient) =>
  //       ingredient.includes(ingredientInput.toLowerCase().trim())
  //     );
  //   }
  // SANS RECHERCHE
  return allIngredients;
};

let ustensilsArray = (recipes, inputValue) => {
  // console.log(recipes);
  let allUstensils = [];
  //   let ustensilInput = inputValue.toLowerCase().trim();

  for (const recipe of recipes) {
    // console.log(recipe);
    for (const ustensil of recipe.ustensils) {
      let currentUstensil = ustensil.toLowerCase().trim();
      if (allUstensils.length === 0) {
        allUstensils.push(currentUstensil);
      } else {
        let isIn = false;
        for (const itemInUstensils of allUstensils) {
          if (itemInUstensils === currentUstensil) {
            isIn = true;
          }
        }
        if (!isIn) {
          allUstensils.push(currentUstensil);
        }
      }
    }
  }

  // SI RECHERCHE DANS INPUT....
  //   if (inputValue) {
  //     return allUstensils.filter((ustensil) =>
  //       ustensil.includes(ustensilInput.toLowerCase().trim())
  //     );
  //   }
  // SANS RECHERCHE
  return allUstensils;
};
let appliancesArray = (recipes, inputValue) => {
  // console.log(recipes);
  let allAppliances = [];
  //   let applianceInput = inputValue.toLowerCase().trim();

  for (const recipe of recipes) {
    const currentAppliance = recipe.appliance.toLowerCase().trim();
    if (allAppliances.length === 0) {
      allAppliances.push(currentAppliance);
    }
  }
  // SI RECHERCHE DANS INPUT....
  //   if (inputValue) {
  //     return allAppliances.filter((ustensil) =>
  //       ustensil.includes(applianceInput.toLowerCase().trim())
  //     );
  //   }
  // SANS RECHERCHE
  return allAppliances;
};

getStorageItem("recipes");

// console.log(ingredientsArray(getStorageItem("recipes")));
// console.log(ustensilsArray(getStorageItem("recipes")));
// console.log(appliancesArray(getStorageItem("recipes")));

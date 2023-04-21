let ingredientsArray = (recipes, inputValue) => {
  // console.log(recipes);
  let distinctIngredients = [];
  //   let filterFilter = inputValue.toLowerCase().trim();

  for (const recipe of recipes) {
    // console.log(recipe);
    for (const ingredient of recipe.ingredients) {
      let currentIngredient = ingredient.ingredient.toLowerCase().trim();
      // console.log(currentIngredient);
      if (distinctIngredients.length === 0) {
        distinctIngredients.push(currentIngredient);
        // console.log(ingredients);
      } else {
        let isIn = false;
        for (const itemInIngredients of distinctIngredients) {
          // console.log(itemInIngredients);
          if (itemInIngredients === currentIngredient) {
            isIn = true;
          }
        }
        if (!isIn) {
          distinctIngredients.push(currentIngredient);
        }
      }
    }
  }

  // SI RECHERCHE DANS INPUT....
  //   if (inputValue) {
  //     return distinctIngredients.filter((ingredient) =>
  //       ingredient.includes(filterFilter.toLowerCase().trim())
  //     );
  //   }
  // SANS RECHERCHE
  return distinctIngredients;
};
getStorageItem("recipes");

console.log(ingredientsArray(getStorageItem("recipes")));

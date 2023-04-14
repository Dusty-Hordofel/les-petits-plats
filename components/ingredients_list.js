const ingredientsList = (element, recipes) => {
  // element.innerHTML = 33;
  element.innerHTML = `
  <div class="recipe__list__container">
    <ul class="recipe__list__container--items">
    ${recipes
      .map((recipe, index) => {
        let recipeId = recipe.charAt(0).toUpperCase() + recipe.slice(1);
        console.log(
          "🚀 ~ file: ingredients_list.js:9 ~ .map ~ recipeId:",
          typeof recipeId
        );
        return `<li class="recipe__container--item" key=${index} id="${recipeId}" onclick="addTag('${recipeId}')"> ${
          recipe.charAt(0).toUpperCase() + recipe.slice(1)
        }</li>`;
      })
      .join("")}
    </ul>
    </div>
 `;
};

const appliancesList = (element, recipes) => {
  // element.innerHTML = 33;
  element.innerHTML = `
  <div class="appliance__list__container">
    <ul class="appliance__list__container--items">
    ${recipes
      .map((recipe, index) => {
        let applianceId = recipe.charAt(0).toUpperCase() + recipe.slice(1);
        console.log(
          "🚀 ~ file: ingredients_list.js:9 ~ .map ~ recipeId:",
          typeof applianceId
        );
        return `<li class="appliance__container--item" key=${index} id="${applianceId}" onclick="addApplianceTag('${applianceId}')"> ${
          recipe.charAt(0).toUpperCase() + recipe.slice(1)
        }</li>`;
      })
      .join("")}
    </ul>
    </div>
 `;
};
const ustensilsList = (element, recipes) => {
  // element.innerHTML = 33;
  element.innerHTML = `
  <div class="ustensil__list__container">
    <ul class="ustensil__list__container--items">
    ${recipes
      .map((recipe, index) => {
        let ustensilId = recipe.charAt(0).toUpperCase() + recipe.slice(1);
        console.log(
          "🚀 ~ file: ingredients_list.js:9 ~ .map ~ recipeId:",
          typeof ustensilId
        );
        return `<li class="ustensil__container--item" key=${index} id="${ustensilId}" onclick="addustensilTag('${ustensilId}')"> ${
          recipe.charAt(0).toUpperCase() + recipe.slice(1)
        }</li>`;
      })
      .join("")}
    </ul>
    </div>
 `;
};

export { ingredientsList, appliancesList, ustensilsList };

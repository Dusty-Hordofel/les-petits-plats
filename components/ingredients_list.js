const ingredientsList = (element, recipes) => {
  element.innerHTML = `
  <div class="recipe__list__container">
    <ul class="recipe__list__container--items">
    ${recipes
      .map((recipe, index) => {
        let recipeId = recipe.charAt(0).toUpperCase() + recipe.slice(1);

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
  element.innerHTML = `
  <div class="appliance__list__container">
    <ul class="appliance__list__container--items">
    ${recipes
      .map((recipe, index) => {
        let applianceId = recipe.charAt(0).toUpperCase() + recipe.slice(1);

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
  element.innerHTML = `
  <div class="ustensil__list__container">
    <ul class="ustensil__list__container--items">
    ${recipes
      .map((recipe, index) => {
        let ustensilId = recipe.charAt(0).toUpperCase() + recipe.slice(1);

        return `<li class="ustensil__container--item" key=${index} id="${ustensilId}" onclick="addUstensilTag('${ustensilId}')"> ${recipe}</li>`;
      })
      .join("")}
    </ul>
    </div>
 `;
};

//DONE:Component to display the list of ingredients, appliances and ustensils
const setListToFilter = (element, type, recipes) => {
  element.innerHTML = `
  <div class="${type}__list__container">
    <ul class="${type}__list__container--items">
    ${recipes
      .map((recipe, index) => {
        let idType = recipe.charAt(0).toUpperCase() + recipe.slice(1);

        return `<li class="${type}__container--item" key=${index} id="${idType}"> ${recipe}</li>`;
      })
      .join("")}
    </ul>
    </div>
 `;
};

export { ingredientsList, appliancesList, ustensilsList, setListToFilter };

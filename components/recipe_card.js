const recipeDescription = (ingredients) => {
  return ingredients
    .map((ingrediento) => {
      const { ingredient, quantity, unit } = ingrediento;
      return `
    <li class="recipe__card__description__ingredients--item">
    <p class="recipe__card__description--ingredients__item--name"><b>${
      ingredient ? ingredient : ""
    }</b>${quantity ? " : " : " "}</p>
    <p class="recipe__card__description--ingredients__item--quantity">${
      quantity ? quantity : ""
    }</p>
    <p class="recipe__card__description--ingredients__item--unit">${
      unit ? unit : ""
    }</p>
    </li>`;
    })
    .join("");
};

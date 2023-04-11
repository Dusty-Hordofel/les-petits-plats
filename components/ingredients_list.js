export function ingredientsList(element, recipes) {
  // element.innerHTML = 33;
  element.innerHTML = `
  <div class="recipe__list__container">
    <ul class="recipe__list__container--items">
    ${recipes
      .map(
        (recipe, index) =>
          `<li class="recipe__container--item" key=${index}} onclick="addTag(${index})"> ${
            recipe.charAt(0).toUpperCase() + recipe.slice(1)
          }</li>`
      )
      .join("")}
    </ul>
    </div>
 `;
}

// return `
// <li class="recipe__card__description__ingredients--item">
// <p class="recipe__card__description--ingredients__item--name">
// ${ingredient ? ingredient : ""}
// </li>`;
// element.innerHTML = `
// <div class="recipe__card__description__ingredients--container">
//     <ul class="recipe__card__description__ingredients">
//     ${ingredients
//       .map((ingrediento) => {
//         const { ingredient } = ingrediento;
//         return `
//         <li class="recipe__card__description__ingredients--item">
//         <p class="recipe__card__description--ingredients__item--name">
//         ${ingredient ? ingredient : ""}
//         </li>`;
//       })
//       .join("")}
//     </ul>
//     </div>

//  `;

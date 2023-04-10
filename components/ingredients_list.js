export function ingredientsList(element, recipes) {
  // console.log(
  //   "🚀 ~ file: ingredients_list.js:2 ~ ingredientsList ~ ingredients:",
  //   ingredients
  // );
  // element.innerHTML = 33;
  element.innerHTML = `
  <div class="recipe__card__description__ingredients--container">
    <ul class="recipe__card__description__ingredients">
    ${recipes
      .map((recipe) => {
        const { ingredients } = recipe;
        console.log(
          "🚀 ~ file: ingredients_list.js:13 ~ .map ~ ingredient:",
          ingredients
        );
      })
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

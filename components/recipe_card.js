/*export*/ const recipesCards = (element, recipes) => {
  element.innerHTML = `<ul class="recipes__container">
    ${recipes
      .map((recipe) => {
        const {
          id,
          name,
          /*servings,*/
          ingredients,
          time,
          description,
          /*appliance,
          ustensils,*/
        } = recipe;
        return `<li class="recipe__card" id="${id}">
        <article className="recipe__card" id={id}>
        <div class="recipe__card__header">
          <img
            src="assets/images/img.png" alt="blank image"
            alt={recipe.title}
            class="recipe__card__header--image"
          />
          </div>
          <div class="recipe__card__description">
          <div class="recipe__card__description--title flex-row">
          <p id="recipe__title">
          ${name}
          </p>
          <p id="recipe__time">
          <span class="fa-regular fa-clock">  ${time}</span>  min
          </p>
          </div>
          <div class="recipe__card__description__ingredients--container">
        <ul class="recipe__card__description__ingredients">
        ${ingredients
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
          .join("")}
        </ul>
        <div class="recipe__card__description__ingredients--details">${description}</div>
        </div>

      </article>
        </li>`;
      })
      .join("")}
    </ul>
    </div>`;
};

// return (
{
  /* <article className="recipe__card" id={id}>
  <div class="recipe__card__header">
    <img
      src={recipe.image}
      alt={recipe.title}
      class="recipe__card__header--image"
    />
    <p>
      <span class="fa-regular fa-clock recipe__card__header--title"></span>
      {recipe.title}
    </p>
  </div>
  <div class="recipe__card__description"></div>
</article>; */
}
//   );

{
  /* <p class="recipe__card__description--ingredients__item--name"><b>${
    ingredient ? ingredient : ""
  }</b></p>${quantity ? " : " : " "}
  <p class="recipe__card__description--ingredients__item--quantity">${
    quantity ? quantity : ""
  }</p>
  <p class="recipe__card__description--ingredients__item--unit">${
    unit ? unit : ""
  }</p> */
}

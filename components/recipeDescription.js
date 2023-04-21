// recipeDescription(ingredients)
//setRecipesCards
const setRecipesCards = (element, recipes) => {
  element.innerHTML = `<ul class="recipes__container">
    ${recipes
      .map((recipe) => {
        const { id, name, ingredients, time, description } = recipe;
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
        ${recipeDescription(ingredients)}
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

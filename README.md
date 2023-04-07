# Les-Petits-Plats 👨‍🍳

![Logo](/assets/images/logo.svg)

## Développez un algorithme de recherche en JavaScript

- Implémentez un algorithme de recherche de recettes de cuisines pour le site **Les Petits Plats** grâce à des outils et méthodes avancées de Javascript.

## Section 1: Folder Structure

### 1. create project structure

- create folders `assets` `js` and `sass` folders

## Section 2: Header

### 2. create Header

- create [Header](/src/index.html) script

```html
<!-- Header  -->
    <header
      class="header"
      role="banner"
      tabindex="0"
      aria-label="En-tête de la page d'acceuil des petits plats"
    >
      <a
        href="index.html"
        target="blank"
        title="Lien vers la page d'acceuil"
        class="header__link"
```

- style [Header](/src/styles/layouts/header.scss)

```css
.header {
  @include flex;
  @include section-center;
  margin: 4.2rem auto 1.7rem auto;
  background: yellow;
  &__logo {
    width: 26.8rem;
  }
}
```

## Section 3: Main

### 3. create SearchBar

- add [InputSearchBar](./src/index.html) script

```html
<main
  id="main"
  role="main"
  aria-label="Contenu principal de la page d'accueil du recettes"
  class="section-center main-section"
>
  <section class="search">
    <div class="search__input-container">
      <input
        type="text"
        class="search__input"
        placeholder="Rechercher un ingrédient, un appareil, un ustensile, une recette..."
      />
      <button class="search__button">
        <img src="./assets/images/search.svg" alt="Search" />
      </button>
    </div>
  </section>
</main>
```

- Style [SearchBar](/src/styles/layouts/navigation.scss)

```css
main {
  .search {
    @include section-center;
    &__input-container {
      position: relative;
      @include flex(row, space-between, start);
      margin-bottom: 2.5rem;
    }

    &__input {
      height: 6.9rem;
      color: $les-petits-plats-grey-1;
      background: $les-petits-plats-grey-1;
      padding: 2.4rem 8rem 2.4rem 2.4rem;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    &__button {
      position: absolute;
      width: 3.206rem;
      background: transparent;
      right: 2.4rem;
      top: 1.75rem;
    }
  }
}
```

### 4. Ingredient Filter Button and Search Input

- create [filterIngredients](/create_filters.js)

```js
const filterIngredients = (element) => {
  element.innerHTML = `
<div class="filter__ingredients--container flex-row">
  <div class="filter__ingredients__title flex-row">
  <h2 class="filter__ingredients__title--name">Ingredients</h2>
  <span class="fa-solid fa-chevron-down filter__ingredients__title--icon--down" onclick="arrowDown()"></span>
  </div>

  <input id="ingredients-input" type="text" class="filter__ingredients--input" placeholder="Selectionner un ingrédient..." />
  <span id="filter__ingredients__title--icon--up" class="fa-solid fa-chevron-up" onclick="arrowUp()"></span>
  <div class="filter__ingredients--list"></div>
</div>
`;
};
```

- style [filterIngredients](/create_filters.js)

```css
.filter__ingredients--container {
  width: 17rem;
  height: 6.9rem;
  background: var(--les-petits-plats-blue);
  border-radius: 5px;
  padding: 1.5rem 2.4rem;
  transition: all 0.3s ease-in-out;
}

.filter__ingredients__title {
  font-size: var(--les-petits-plats-fs-2);
  color: var(--les-petits-plats-white);
  font-weight: var(--les-petits-plats-fw-700);
  width: 100%;
}
.filter__ingredients__title h2 {
  font-size: var(--les-petits-plats-fs-2);
  animation: title 0.5s ease-in-out;
}

@keyframes title {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#filter__ingredients__title--icon--down,
#filter__ingredients__title--icon--up {
  display: block;
  cursor: pointer;
  color: var(--les-petits-plats-white);
  font-size: var(--les-petits-plats-fs-2);
}

.filter__ingredients--input {
  display: none;
  background: var(--les-petits-plats-blue);
  color: var(--les-petits-plats-white);
}

.filter__ingredients--input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

#filter__ingredients__title--icon--up {
  display: none;
}
```

### 5. Receipe's Cards

- add [data](/data/recipes.json)
- create [recipesCards](/src/components/recipe_card.js)

```js
export const recipesCards = (element, recipes) => {
  element.innerHTML = `<ul class="recipes__container">
    ${recipes
      .map((recipe) => {
        const {
          id,
          name,
          servings,
          ingredients,
          time,
          description,
          appliance,
          ustensils,
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
          ${recipe.name}
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
```

- style [recipesCards](/src/components/recipe_card.js)

```css
.recipes__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  width: 1302px;
  margin: 2.5rem auto 2.5rem auto;
}

.recipe__card__header--image {
  width: 100%;
  height: 20rem;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.recipe__card {
  width: 40.066rem;
  height: 40.066rem;
  /* height: 36.4rem; */
  border-radius: 5px;
  background: var(--les-petits-plats-grey-1);
}

.recipe__card__description {
  padding: 2rem;
}
.recipe__card__description--title {
  font-size: var(--les-petits-plats-fs-2);
}

/* ingredients details */
.recipe__card__description__ingredients--container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* height: 38.7rem; */
}

.recipe__card__description__ingredients {
  height: 10.5rem;
  overflow-y: scroll;
  padding-right: 1rem;
}
.recipe__card__description__ingredients--details {
  height: 10.5rem;
  overflow-y: scroll;
}

.recipe__card__description__ingredients--item {
  display: flex;
  flex-wrap: wrap;
}

.recipe__card__description--ingredients__item--quantity,
.recipe__card__description--ingredients__item--unit {
  margin-left: 5px;
}
```

### 6. Filtering test

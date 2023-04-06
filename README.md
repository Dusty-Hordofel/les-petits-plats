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

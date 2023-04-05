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

### 4. Ingredient's Filter

- create [filterIngredients](/src/components/filters.js)

```js

```

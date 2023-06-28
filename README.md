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
  /* display: none; */
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

### 6. Search Ingredients Filter

![ingredientsList](/assets/images/ingredients.png)

- create [displayIngredientsList](/index.js)

```js
//display the list of ingredients
const displayIngredientsList = async () => {
  //get the form and the input
  const form = getElement(".search__input-ingredients");
  const nameInput = getElement("#ingredients-input");

  // list of ingredients
  const recipes = await getRecipesData();

  //recuperer la valeur de l'input et afficher la liste des ingrédients
  form.addEventListener("keyup", function () {
    //get the value of the input
    const value = nameInput.value;
    //filter the data based on the value of the input
    const ingredients = filteredIngredients(recipes, value);
    //display filtered data in the receipes container
    ingredientsList(getElement(".filter__ingredients--list"), ingredients);
  });
};

displayIngredientsList();
```

### 7. Tags

- create [addTag](/utils/arrowDown.js)

```js
//Add tags
const addTag = (index) => {
  // console.log("Hello People", index);
  console.log(" 3333");
  const filterItemIngredients = document.querySelectorAll(
    ".recipe__container--item"
  )[index];
  console.log(
    "🚀 ~ file: index.js:89 ~ test ~ filterItemIngredients:",
    filterItemIngredients
  );

  const tagIngredientContainer = document.createElement("div");
  tagIngredientContainer.setAttribute("class", "ingredient__tag");

  const tagIngredient = document.createElement("li");
  tagIngredient.innerText = filterItemIngredients.innerText;
  tagIngredient.classList.add("blue__tag");

  //create the delete icon
  const deleteTagIcon = document.createElement("span");
  deleteTagIcon.classname = "deleteIcon";

  const deleteIconImg = document.createElement("span");
  deleteIconImg.className = "fa-regular fa-circle-xmark";
  deleteIconImg.style.cursor = "pointer";
  deleteIconImg.style.width = "20px";
  //remove the tag
  deleteIconImg.addEventListener("click", () => {
    tagIngredientContainer.remove();
    // liveSearch();
    return false;
  });

  ingredientTag.appendChild(tagIngredientContainer);
  tagIngredientContainer.appendChild(tagIngredient);
  tagIngredientContainer.appendChild(deleteTagIcon);
  deleteTagIcon.appendChild(deleteIconImg);
  // liveSearch();
};
```

### 8. filteredRecipesWithTags

```js
const filteredRecipesWithTags = (recipesToFilter) => {
  /* Faire des tableaux des items afficher pour chaque filtre */
  const taggedIngredientsDOM = Array.from(
    document.querySelectorAll(".ingredients__tag .ingredient__tag .blue__tag")
  );
  console.log(
    "🚀 ~ file: arrowDown.js:100 ~ filteredRecipesWithTags ~ taggedIngredientsDOM:",
    taggedIngredientsDOM
  );

  let recipesToDisplay = []; // array of recipes to display
  let taggedIngredients = []; // array of ingredients to filter

  // create an array of text of tagged ingredients using the array of DOM elements
  taggedIngredients = taggedIngredientsDOM.map(
    (taggedIngredient) => taggedIngredient.innerText
  );
  console.log(
    "🚀 ~ file: arrowDown.js:111 ~ filteredRecipesWithTags ~ taggedIngredients:",
    taggedIngredients
  );

  //array of recipes to filter : recipesToFilter is the array of recipes to filter we get from the API
  recipesToDisplay = recipesToFilter.filter((recipe) => {
    let recipeIsMatching = false;
    let ingredientIsMatching = false;

    let ingredientsMatching = 0;

    let ingredientsInTheRecipe = [];

    // get all the ingredients in the recipe:we will have list of ingredients
    ingredientsInTheRecipe = recipe.ingredients.map(({ ingredient }) => {
      return ingredient;
    });
    console.log(
      "🚀 ~ file: arrowDown.js:129 ~ recipesToDisplay=recipesToFilter.filter ~ ingredientsInTheRecipe:",
      ingredientsInTheRecipe
    );

    // check if ingredientsInTheRecipe contains tagged ingredients and count them
    if (taggedIngredients.length > 0) {
      taggedIngredients.forEach((taggedIngredient) => {
        console.log(
          "🚀 ~ file: arrowDown.js:138 ~ taggedIngredients.forEach ~ ingredientsMatching:",
          ingredientsMatching,
          ingredientsInTheRecipe
        );
        if (ingredientsInTheRecipe.includes(taggedIngredient)) {
          console.log(
            "🚀 ~ file: arrowDown.js:144 ~ taggedIngredients.forEach ~ ingredientsMatching:",
            ingredientsMatching,
            ingredientsInTheRecipe
          );
          ingredientsMatching += 1;
        }
      });
    }

    // if all the tagged ingredients are in the recipe, the recipe is matching
    if (ingredientsMatching === taggedIngredients.length) {
      ingredientIsMatching = true;
    }

    // if the recipe is matching, we add it to the array of recipes to display
    if (ingredientIsMatching === true) {
      recipeIsMatching = true;
    }
    return recipeIsMatching;
  });

  filterAll(recipesToDisplay);
  return recipesToDisplay;
};
// filteredRecipesWithTags();
const filterAll = (recipes) => {
  const ingredientsListDOM = document.querySelector(
    ".recipe__list__container--items"
  );

  const ingredientsList = [];
  //vider la liste des ingredients à chaque ajout de tag
  ingredientsListDOM.innerHTML = "";

  recipes.map((recipe) => {
    //gestion des ingredients
    //si l'ingrédient existe déjà , on ne l'ajoute pas
    const ingredientsTag = [
      ...document.querySelectorAll(".ingredient__tag"),
    ].map((itag) => itag.innerText);
    //map sur les ingredients de la recette
    recipe.ingredients.map(({ ingredient }, index) => {
      //si l'ingrédient n'est pas dans le tableau des tags et n'est pas dans le tableau des ingredients
      if (
        !ingredientsTag.includes(ingredient) &&
        !ingredientsList.includes(ingredient)
      ) {
        //ajout de l'ingrédient dans le tableau des ingredients
        ingredientsList.push(ingredient);
        //ajout de l'ingrédient dans la liste des ingredients
        const ingredientItem = document.createElement("li");
        ingredientItem.className = "recipe__container--item";
        ingredientItem.setAttribute("key", index);
        ingredientItem.innerText = ingredient;
        ingredientItem.setAttribute("id", ingredientItem.textContent);
        ingredientsListDOM.appendChild(ingredientItem);
        ingredientItem.addEventListener("click", () => {
          addTag(ingredientItem.textContent);
        });
      }
    });
  });
};
```

### 9. Recipes Algorithm

- create [algo function](/algo/algoFn.js)

```js
// list of ingredients
const ingredientsListToFilter = (data, inputValue) => {
  const ingredients = [
    ...new Set(
      data
        .map((recipe) =>
          recipe.ingredients.map((ingredient) =>
            ingredient.ingredient.toLowerCase().trim()
          )
        )
        .flat()
        .sort()
    ),
  ];

  // Si on a un element dans l'input, on filtre les ingrédients
  if (inputValue) {
    return ingredients.filter((ingredient) =>
      ingredient.includes(inputValue.toLowerCase().trim())
    );
  }
  // Sinon on retourne tous les ingrédients
  return ingredients;
};
console.log(
  "🚀 ~ file: algoFn.js:26 ~ ingredientsListToFilter ~ ingredientsListToFilter:",
  ingredientsListToFilter(getStorageItem("recipes"))
);

// list of APPLIANCE
const applianceListToFilter = (data, inputValue) => {
  const appliances = [
    ...new Set(
      data.map((recipe) => recipe.appliance.toLowerCase().trim()).sort()
    ),
  ];

  // Si on a un element dans l'input, on filtre les ingrédients
  if (inputValue) {
    return appliances.filter((ingredient) =>
      ingredient.includes(inputValue.toLowerCase().trim())
    );
  }
  // Sinon on retourne tous les ingrédients
  return appliances;
};
console.log(
  "🚀 ~ file: algoFn.js:49 ~ applianceListToFilter ~ applianceListToFilter:",
  applianceListToFilter(getStorageItem("recipes"))
);

// list of USTENSILS
const ustensilsListToFilter = (data, inputValue) => {
  const ustensils = [
    ...new Set(
      data
        .map((recipe) =>
          recipe.ustensils.map((item) => item.toLowerCase().trim())
        )
        .flat()
        .sort()
    ),
  ];

  // Si on a un element dans l'input, on filtre les ingrédients
  if (inputValue) {
    return ustensils.filter((ingredient) =>
      ingredient.includes(inputValue.toLowerCase().trim())
    );
  }
  // Sinon on retourne tous les ingrédients
  return ustensils;
};

console.log(
  "🚀 ~ file: algoFn.js:76 ~ ustensilsListToFilter ~ ustensilsListToFilter:",
  ustensilsListToFilter(getStorageItem("recipes"))
);
```

### 10. filteredApplianceWithTags

- create [arrowApplianceDown](/utils/arrowDown.js)

```js
const arrowApplianceDown = () => {
  console.log("tu cliques sur la flèche");

  //hide the ingredient button
  getElement(".filter__appliances__title").style.display = "none";
  //display appliances input
  getElement("#appliances-input").style.display = "block";
  //add focus on appliances  input
  getElement("#appliances-input").focus();
  //display the arrow up
  getElement("#filter__appliances__title--icon--up").style.display = "block";
  //expand the appliances container
  getElement(".filter__appliances--container").style.width = "667px";
  //display the list of appliances
  getElement(".filter__appliances--list").style.display = "flex";
  // show search input
  // show the list of appliances
  //display the list of appliances
};
```

- create [arrowApplianceUp](/utils/arrowUp.js)

```js
const arrowApplianceUp = () => {
  console.log("tu cliques sur la flèche");

  //show the ingredient's button
  getElement(".filter__appliances__title").style.display = "flex";
  //hide ingredient's input search
  getElement("#appliances-input").style.display = "none";
  //hide the arrow up
  getElement("#filter__appliances__title--icon--up").style.display = "none";
  //reduce the appliances container
  getElement(".filter__appliances--container").style.width = "17rem";
  //display the list of appliances
  getElement(".filter__appliances--list").style.display = "none";
  // show search input
  // show the list of ingredients
  //display the list of ingredients
};
```

- create [appliancesList](/components/ingredients_list.js)

```js
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
```

- create [displayAppliances](/components/create_filters.js)

```js
export const displayAppliances = (element) => {
  element.innerHTML = `
  <div class="filter__appliances--container ">
  <div class="flex-row input__section">
  <div class="filter__appliances__title flex-row">
  <h2 class="filter__appliances__title--name">Appareils</h2>
  <span class="fa-solid fa-chevron-down filter__appliances__title--icon--down" onclick="arrowApplianceDown()"></span>
  </div>
  <form class="search__input-appliances">
  <input id="appliances-input" type="text" class="filter__appliances--input" placeholder="Selectionner un appareil..." />
  </form>
  <span id="filter__appliances__title--icon--up" class="fa-solid fa-chevron-up" onclick="arrowApplianceUp()"></span>
  </div>
  <div class="filter__appliances--list"></div>
  </div>
`;
};
```

- create [addApplianceTag](/utils/tags.js)

```js
const addApplianceTag = (applianceId) => {
  console.log(
    "🚀 ~ file: arrowDown.js:51 ~ addTag ~ applianceId:",
    applianceId
  );
  // console.log("Hello People", index);
  console.log(" 3333");
  const filterItemAppliances = document.getElementById(applianceId);
  console.log(
    "🚀 ~ file: index.js:59 ~ test ~ filterItemAppliances:",
    filterItemAppliances
  );

  const tagApplianceContainer = document.createElement("div");
  tagApplianceContainer.setAttribute("class", "appliance__tag");

  const tagAppliance = document.createElement("li");
  tagAppliance.innerText = filterItemAppliances.innerText;
  tagAppliance.classList.add("green__tag");

  //create the delete icon
  const deleteTagIcon = document.createElement("span");
  deleteTagIcon.classname = "deleteIcon";

  const deleteIconImg = document.createElement("span");
  deleteIconImg.className = "fa-regular fa-circle-xmark";
  deleteIconImg.style.cursor = "pointer";
  deleteIconImg.style.width = "20px";
  //remove the tag
  deleteIconImg.addEventListener("click", () => {
    tagApplianceContainer.remove();
    return false;
  });

  ingredientTag.appendChild(tagApplianceContainer);
  tagApplianceContainer.appendChild(tagAppliance);
  tagApplianceContainer.appendChild(deleteTagIcon);
  deleteTagIcon.appendChild(deleteIconImg);
};
```

### 11. filteredApplianceWithTags (part 2)

- Ajouter la gestion ds [appareils](/utils/arrowDown.js)

```js
//gestion des appareils
//si l'appareil existe déjà , on ne l'ajoute pas
const appliancesTag = [...document.querySelectorAll(".appliance__tag")].map(
  (applianceTag) => applianceTag.innerText
);
console.log(
  "🚀 ~ file: arrowDown.js:350 ~ recipes.map ~ ingredientsTag:",
  appliancesTag
);
//si l'appareil n'est pas dans le tableau des tags et n'est pas dans le tableau des appareils, on l'ajoute
if (
  !appliancesList.includes(recipe.appliance) &&
  !appliancesTag.includes(recipe.appliance)
) {
  appliancesList.push(recipe.appliance);
  const applianceItem = document.createElement("li");
  applianceItem.classList.add("appliance__container--item");
  applianceItem.innerText = recipe.appliance;
  appliancesListDOM.appendChild(applianceItem);
  console.log(applianceItem);
  applianceItem.addEventListener("click", () => {
    addApplianceTag(applianceItem.textContent);
  });
}
```

### 12. displayUstensils button

- create [displayUstensils](/components/create_filters.js)

```js
export const displayUstensils = (element) => {
  element.innerHTML = `
  <div class="filter__ustensils--container ">
  <div class="flex-row input__section">
  <div class="filter__ustensils__title flex-row">
  <h2 class="filter__ustensils__title--name">Ustensiles</h2>
  <span class="fa-solid fa-chevron-down filter__ustensils__title--icon--down" onclick="arrowApplianceDown()"></span>
  </div>
  <form class="search__input-ustensils">
  <input id="ustensils-input" type="text" class="filter__ustensils--input" placeholder="Selectionner un appareil..." />
  </form>
  <span id="filter__ustensils__title--icon--up" class="fa-solid fa-chevron-up" onclick="arrowApplianceUp()"></span>
  </div>
  <div class="filter__ustensils--list"></div>
  </div>
`;
};
```

### 13. arrowUstensilUp && arrowUstensilDown

- [arrowUstensilDown](/)

```js
const arrowUstensilDown = () => {
  console.log("tu cliques sur la flèche");

  //hide the ustensil button
  getElement(".filter__ustensils__title").style.display = "none";
  //display ustensils input
  getElement("#ustensils-input").style.display = "block";
  //add focus on ustensils  input
  getElement("#ustensils-input").focus();
  //display the arrow up
  getElement("#filter__ustensils__title--icon--up").style.display = "block";
  //expand the ustensils container
  getElement(".filter__ustensils--container").style.width = "667px";
  getElement(".filter__ustensils--container").style.height = "auto";
  //display the list of ustensils
};
```

- [arrowUstensilUp](/)

```js
const arrowUstensilUp = () => {
  console.log("tu cliques sur la flèche");

  //show the ustensil's button
  getElement(".filter__ustensils__title").style.display = "flex";
  //hide ustensil's input search
  getElement("#ustensils-input").style.display = "none";
  //hide the arrow up
  getElement("#filter__ustensils__title--icon--up").style.display = "none";
  //reduce the ustensils container
  getElement(".filter__ustensils--container").style.width = "17rem";
  getElement(".filter__ustensils--container").style.height = "6.9rem";
  // show the list of ustensils
  //display the list of ustensils
};
```

### 14. Display Ustensils List

- create [ustensilsList](/components/ingredients_list.js)

```js
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
```

- create [displayRetrievedUstensils](/index.js) to display [displayUstensilsList](/index.js) without input entries

```js
//Récupérer et afficher la listes des ustensiles sans filtre
const displayRetrievedUstensils = () => {
  console.log(
    ustensilsList(
      getElement(".filter__ustensils--list"),
      ustensilsListToFilter(recipes)
    )
  );
};
displayRetrievedUstensils();
```

- create [displayUstensilsList](/index.js) to display [displayRetrievedUstensils](/index.js) with or without input entries

```js
//Afficher la listes des ustensiles avec ou sans filtre
const displayUstensilsList = () => {
  //get the form and the input
  const form = getElement(".search__input-ustensils");
  const nameInput = getElement("#ustensils-input");

  // list of ingredients
  // const recipes = await getRecipesData();
  const recipes = getStorageItem("recipes");

  //recuperer la valeur de l'input et afficher la liste des ingrédients
  form.addEventListener("keyup", function () {
    //get the value of the input
    const value = nameInput.value;
    //filter the data based on the value of the input
    const ustensils = ustensilsListToFilter(recipes, value);
    //display filtered data in the receipes container
    appliancesList(getElement(".filter__ustensils--list"), ustensils);
  });
};

displayUstensilsList();
```

### 15. Create Ustensils tag

- create [addUstensilTag](/utils/tags.js)

```js
//Add applianceTag
const addUstensilTag = (ustensilId) => {
  console.log("🚀 ~ file: arrowDown.js:51 ~ addTag ~ ustensilId:", ustensilId);
  // console.log("Hello People", index);
  console.log(" 3333");
  const filterItemUstensils = document.getElementById(ustensilId);
  console.log(
    "🚀 ~ file: index.js:59 ~ test ~ filterItemUstensils:",
    filterItemUstensils
  );

  const tagUstensilContainer = document.createElement("div");
  tagUstensilContainer.setAttribute("class", "ustensil__tag");

  const tagUstensil = document.createElement("li");
  tagUstensil.innerText = filterItemUstensils.innerText;
  tagUstensil.classList.add("red__tag");

  //create the delete icon
  const deleteTagIcon = document.createElement("span");
  deleteTagIcon.classname = "deleteIcon";

  const deleteIconImg = document.createElement("span");
  deleteIconImg.className = "fa-regular fa-circle-xmark";
  deleteIconImg.style.cursor = "pointer";
  deleteIconImg.style.width = "20px";
  //remove the tag
  deleteIconImg.addEventListener("click", () => {
    tagUstensilContainer.remove();

    // filteredRecipesWithTags(getStorageItem("recipes"));
    recipesCards(
      getElement("#recipes"),
      filteredRecipesWithTags(getStorageItem("recipes"))
    );
    return false;
  });

  ustensilTag.appendChild(tagUstensilContainer);
  tagUstensilContainer.appendChild(tagUstensil);
  tagUstensilContainer.appendChild(deleteTagIcon);
  deleteTagIcon.appendChild(deleteIconImg);
  recipesCards(
    getElement("#recipes"),
    filteredRecipesWithTags(getStorageItem("recipes"))
  );
  // filteredRecipesWithTags(getStorageItem("recipes"));
};
```

- handle [addUstensilTag](/utils/tags.js) in [filteredRecipesWithTags](/utils/arrowDown.js)

```js
//gestion des ustensiles
//Si l'ustensile existe déjà , on ne l'ajoute pas
const ustensilsTag = [...document.querySelectorAll(".tag__ustensil")].map(
  (utag) => utag.innerText
);

//si l'ustensile n'est pas dans le tableau des tags et n'est pas dans le tableau des ustensiles, on l'ajoute
recipe.ustensils.forEach((ustensil) => {
  if (!ustensilsList.includes(ustensil) && !ustensilsTag.includes(ustensil)) {
    ustensilsList.push(ustensil);
    const ustensilItem = document.createElement("li");
    ustensilItem.classList.add("filter__ustensils--items");
    ustensilItem.innerText = ustensil;
    // ustensilsBloc.appendChild(filterItem);
    ustensilsListDOM.appendChild(ustensilItem);
    console.log(ustensilItem);
    ustensilItem.addEventListener("click", () => {
      addApplianceTag(ustensilItem.textContent);
    });
  }
});
```

### 16. Handle Responsiveness

-

### 17. update Searchbar input

- [search](/filters/search.js)

```js
let form = getElement(".search__input-container");
let searchInput = getElement(".search__input");
const recipesElement = getElement("#recipes");

const searchFilter = (recipes) => {
  let tagsUsed = false;
  recipesToDisplay = [];
  let inputValue;

  //get all tags
  const allIngredientTags = document.querySelectorAll(
    ".ingredients__tag .ingredient__tag .blue__tag"
  );
  const allApplianceTags = document.querySelectorAll(
    ".appliances__tag .appliance__tag .green__tag"
  );
  const allUstensilTags = document.querySelectorAll(
    ".ustensils__tag .ustensil__tag .red__tag"
  );

  // Retourne un tableau 'recipeToDisplay' qui suit les règles de ma regex.
  if (searchInput.value.length > 2) {
    inputValue = searchInput.value;
    console.log(
      "🚀 ~ file: search.js:13 ~ searchLive ~ inputValue:",
      inputValue
    );

    // console.log(recipes);
    recipesToDisplay = recipes.filter((recipe) => {
      let { name, appliance, ingredients, description, ustensils } = recipe;

      //verifier si le nom de la recette est inclus dans l'input
      let isNameIncludedInReceipe = name
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      console.log(
        "🚀 ~ file: search.js:21 ~ newData ~ name:",
        isNameIncludedInReceipe
      );
      //verifier si le nom du materiel est inclu dans l'input
      appliance = appliance.toLowerCase().includes(inputValue.toLowerCase());
      //verifier si le nom saisie est inclu dans la description
      description = description
        .toLowerCase()
        .startsWith(inputValue.toLowerCase());

      //verifier si la valeur saisie correspond à l'ustensile
      ustensils = ustensils.includes(inputValue) ? inputValue : "";

      //mettre les ingrédients dans un tableau et vérifier si la valeur de l'input est incluse dans chacun des tableaux
      ingredients = ingredients
        .map((ingredient) => {
          return ingredient.ingredient;
        })
        .includes(inputValue)
        ? inputValue
        : "";

      //renvoi la recette s'il y a une correspondance

      let recipeIsMatching = false;
      if (
        isNameIncludedInReceipe ||
        appliance ||
        description ||
        ustensils ||
        ingredients
      ) {
        recipeIsMatching = true;
      }

      return recipeIsMatching;
    });

    /* Remplir les filtres avec le tableau retourné par recipesToDisplay*/
    filterAll(recipesToDisplay);
  }
  console.log(Array.from(allIngredientTags));
  // Si l'un des tableaux comporte des éléments , un tag est utilisé.On utilse dans ce cas le tableau 'recipesToDisplay' pour afficher les recettes avec recipesToDisplay comme source de données.
  if (
    Array.from(allIngredientTags).length > 0 ||
    Array.from(allApplianceTags).length > 0 ||
    Array.from(allUstensilTags).length > 0
  ) {
    tagsUsed = true;
    if (recipesToDisplay.length > 0) {
      recipesToDisplay = filteredRecipesWithTags(recipesToDisplay);
    } else {
      recipesToDisplay = filteredRecipesWithTags(recipes);
    }
  }

  // SI aucune recherche ne correspond à la regex, on affiche un message d'erreur.
  if (recipesToDisplay.length > 0) {
    recipesElement.innerHTML = "";
    // displayData(recipesToDisplay);
    recipesCards(recipesElement, recipesToDisplay);
  } else {
    // displayData(recipesToDisplay);
    recipesCards(recipesElement, recipesToDisplay);
    recipesElement.innerHTML = `<h3 class="filter-error">
    Désolé, aucune recette ne correspond à votre recherche
    </h3>`;
  }

  // Si la barre de recherche est vide ou moins de 3 caractères.
  if (
    (searchInput.value === "" || searchInput.value.length < 3) &&
    tagsUsed === false
  ) {
    filterAll(recipes);
    console.log(filterAll(recipes));
    recipesCards(recipesElement, recipes);
  }
};

searchInput.addEventListener("keyup", () => {
  searchFilter(getStorageItem("recipes"));
});
```

- set expanded behevior in [arrowDown](/utils/arrowDown.js)
- set [algoLoop](/algo/algoLoop.js)

### 18. filter's Components

- create [displayFilter](/components/create_filters.js)

```js
export const displayFilter = (element, type, title, onClickFunction) => {
  element.innerHTML = `
  <div class="filter__${type}--container ">
  <div class="flex-row input__section">
  <div class="filter__${type}__title flex-row">
  <h2 class="filter__${type}__title--name">${title}</h2>
  <span class="fa-solid fa-chevron-down filter__${type}__title--icon--down" onclick="${onClickFunction.toString()}"></span>
  </div>
  <form class="search__input-${type}">
  <input id="${type}-input" type="text" class="filter__${type}--input" placeholder="Selectionner un appareil..." />
  </form>
  <span id="filter__${type}__title--icon--up" class="fa-solid fa-chevron-up" onclick="arrowUstensilUp()"></span>
  </div>
  <div class="filter__${type}--list"></div>
  </div>
`;
};
```

### 19. setFilterButton Component

- create [setFilterButton](/components/setFilterButtons.js)

```js
export const setFilterButton = (element, type, title) => {
  element.innerHTML = `
  <div class="filter__${type}--container ">
  <div class="flex-row input__section">
  <div class="filter__${type}__title flex-row">
  <h2 class="filter__${type}__title--name">${title}</h2>
  <span class="fa-solid fa-chevron-down filter__${type}__title--icon--down" ></span>
  </div>
  <form class="search__input-${type}">
  <input id="${type}-input" type="text" class="filter__${type}--input" placeholder="Selectionner un appareil..." />
  </form>
  <span id="filter__${type}__title--icon--up" class="fa-solid fa-chevron-up filter__${type}__title--icon--up"></span>
  </div>
  <div class="filter__${type}--list"></div>
  </div>
`;
};
```

### 20. Update files

- change `recipesCards` to `setRecipesCards`
- create [recipeDescription](/components/recipeDescription.js)

```js
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
```

### 21. Projet-avec-la-boucle-avancée-(map)

- utilisation des [algorithm avancées utilisant la méthode javascript map](algo/algoFn.js) dans tout le project

### 22. Projet-avec-la-boucle-native-(map)

- utilisation des [algorithm native utilisant la méthode javascript for](algo/algoLoop.js) dans tout le project.

export const displayIngredients = (element) => {
  element.innerHTML = `
  <div class="filter__ingredients--container ">
  <div class="flex-row input__section">
  <div class="filter__ingredients__title flex-row">
  <h2 class="filter__ingredients__title--name">Ingredients</h2>
  <span class="fa-solid fa-chevron-down filter__ingredients__title--icon--down" onclick="arrowDown()"></span>
  </div>
  <form class="search__input-ingredients">
  <input id="ingredients-input" type="text" class="filter__ingredients--input" placeholder="Selectionner un ingrédient..." />
  </form>
  <span id="filter__ingredients__title--icon--up" class="fa-solid fa-chevron-up" onclick="arrowUp()"></span>
  </div>
  <div class="filter__ingredients--list"></div>
  </div>
`;
};

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

export const displayUstensils = (element) => {
  element.innerHTML = `
  <div class="filter__ustensils--container ">
  <div class="flex-row input__section">
  <div class="filter__ustensils__title flex-row">
  <h2 class="filter__ustensils__title--name">Ustensiles</h2>
  <span class="fa-solid fa-chevron-down filter__ustensils__title--icon--down" onclick="arrowUstensilDown()"></span>
  </div>
  <form class="search__input-ustensils">
  <input id="ustensils-input" type="text" class="filter__ustensils--input" placeholder="Selectionner un appareil..." />
  </form>
  <span id="filter__ustensils__title--icon--up" class="fa-solid fa-chevron-up" onclick="arrowUstensilUp()"></span>
  </div>
  <div class="filter__ustensils--list"></div>
  </div>
`;
};
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

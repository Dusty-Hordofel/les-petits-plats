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

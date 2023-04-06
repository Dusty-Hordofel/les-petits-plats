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

export { filterIngredients };

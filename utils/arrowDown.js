// import { getElement } from "./utils.js";

const arrowDown = () => {
  console.log("tu cliques sur la flèche");

  //hide the ingredient button
  getElement(".filter__ingredients__title").style.display = "none";
  //display ingredients input
  getElement("#ingredients-input").style.display = "block";
  //add focus on ingredients  input
  getElement("#ingredients-input").focus();
  //display the arrow up
  getElement("#filter__ingredients__title--icon--up").style.display = "block";
  //expand the ingredients container
  getElement(".filter__ingredients--container").style.width = "667px";
  //display the list of ingredients
  getElement(".filter__ingredients--list").style.display = "flex";
  // show search input
  // show the list of ingredients
  //display the list of ingredients
};

const arrowUp = () => {
  console.log("tu cliques sur la flèche");

  //show the ingredient's button
  getElement(".filter__ingredients__title").style.display = "flex";
  //hide ingredient's input search
  getElement("#ingredients-input").style.display = "none";
  //hide the arrow up
  getElement("#filter__ingredients__title--icon--up").style.display = "none";
  //reduce the ingredients container
  getElement(".filter__ingredients--container").style.width = "17rem";
  //display the list of ingredients
  getElement(".filter__ingredients--list").style.display = "none";
  // show search input
  // show the list of ingredients
  //display the list of ingredients
};

//tags already selected
let ingredientTagAlreadyAdded = false;

//tags container
const ingredientTag = document.querySelector(".ingredients__tag");
const applianceTag = document.querySelector(".appliances__tag");
const ustensilTag = document.querySelector(".ustensils__tag");

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

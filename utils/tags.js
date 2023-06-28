// import { getElement } from "./utils.js";

//tags already selected
let ingredientTagAlreadyAdded = false;

//tags container
const ingredientTag = document.querySelector(".ingredients__tag");
const applianceTag = document.querySelector(".appliances__tag");
const ustensilTag = document.querySelector(".ustensils__tag");

//Add tags
const addTag = (recipeId) => {
  const filterItemIngredients = document.getElementById(recipeId);

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

    searchFilter(getStorageItem("recipes"));
    return false;
  });

  ingredientTag.appendChild(tagIngredientContainer);
  tagIngredientContainer.appendChild(tagIngredient);
  tagIngredientContainer.appendChild(deleteTagIcon);
  deleteTagIcon.appendChild(deleteIconImg);
  searchFilter(getStorageItem("recipes"));
};

//Add applianceTag
const addApplianceTag = (applianceId) => {
  const filterItemAppliances = document.getElementById(applianceId);

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

    searchFilter(getStorageItem("recipes"));
    return false;
  });

  applianceTag.appendChild(tagApplianceContainer);
  tagApplianceContainer.appendChild(tagAppliance);
  tagApplianceContainer.appendChild(deleteTagIcon);
  deleteTagIcon.appendChild(deleteIconImg);

  searchFilter(getStorageItem("recipes"));
};

//Add applianceTag
const addUstensilTag = (ustensilId) => {
  const filterItemUstensils = document.getElementById(ustensilId);

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

    searchFilter(getStorageItem("recipes"));
    return false;
  });

  ustensilTag.appendChild(tagUstensilContainer);
  tagUstensilContainer.appendChild(tagUstensil);
  tagUstensilContainer.appendChild(deleteTagIcon);
  deleteTagIcon.appendChild(deleteIconImg);

  searchFilter(getStorageItem("recipes"));
};

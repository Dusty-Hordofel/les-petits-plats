//Add applianceTag
const addApplianceTag = (applianceId) => {
  console.log("🚀 ~ file: arrowDown.js:4 ~ addTag ~ applianceId:", applianceId);
  // console.log("Hello People", index);
  // console.log(" 3333");
  const filterItemAppliances = document.getElementById(applianceId);
  console.log(
    "🚀 ~ file: index.js:11 ~ test ~ filterItemAppliances:",
    filterItemAppliances
  );

  const tagApplianceContainer = document.createElement("div");
  tagApplianceContainer.setAttribute("class", "appliance__tag");

  const tagAppliance = document.createElement("li");
  console.log(
    "🚀 ~ file: tags.js:19 ~ addApplianceTag ~ tagAppliance:",
    tagAppliance
  );
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
    // filteredRecipesWithTags(getStorageItem("recipes"));
    // recipesCards(
    //   getElement("#recipes"),
    //   filteredRecipesWithTags(getStorageItem("recipes"))
    // );
    return false;
  });
  //appliance__container--item

  applianceTag.appendChild(tagApplianceContainer);
  tagApplianceContainer.appendChild(tagAppliance);
  tagApplianceContainer.appendChild(deleteTagIcon);
  deleteTagIcon.appendChild(deleteIconImg);

  searchFilter(getStorageItem("recipes"));
  // recipesCards(
  //   getElement("#recipes"),
  //   filteredRecipesWithTags(getStorageItem("recipes"))
  // );
  // filteredRecipesWithTags(getStorageItem("recipes"));
};

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

    searchFilter(getStorageItem("recipes"));
    // filteredRecipesWithTags(getStorageItem("recipes"));
    // recipesCards(
    //   getElement("#recipes"),
    //   filteredRecipesWithTags(getStorageItem("recipes"))
    // );
    return false;
  });

  ustensilTag.appendChild(tagUstensilContainer);
  tagUstensilContainer.appendChild(tagUstensil);
  tagUstensilContainer.appendChild(deleteTagIcon);
  deleteTagIcon.appendChild(deleteIconImg);

  searchFilter(getStorageItem("recipes"));
  // recipesCards(
  //   getElement("#recipes"),
  //   filteredRecipesWithTags(getStorageItem("recipes"))
  // );
  // filteredRecipesWithTags(getStorageItem("recipes"));
};

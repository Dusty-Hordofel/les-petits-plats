//Add applianceTag
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

    // filteredRecipesWithTags(getStorageItem("recipes"));
    recipesCards(
      getElement("#recipes"),
      filteredRecipesWithTags(getStorageItem("recipes"))
    );
    return false;
  });

  applianceTag.appendChild(tagApplianceContainer);
  tagApplianceContainer.appendChild(tagAppliance);
  tagApplianceContainer.appendChild(deleteTagIcon);
  deleteTagIcon.appendChild(deleteIconImg);
  recipesCards(
    getElement("#recipes"),
    filteredRecipesWithTags(getStorageItem("recipes"))
  );
  // filteredRecipesWithTags(getStorageItem("recipes"));
};

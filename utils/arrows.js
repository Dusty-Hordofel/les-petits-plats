const mediaQuery = window.matchMedia("(max-width: 768px)");

const arrowDown = (e) => {
  //hide the ingredient button
  getElement(".filter__ingredients__title").style.display = "none";
  //display ingredients input
  getElement("#ingredients-input").style.display = "block";
  //add focus on ingredients  input
  getElement("#ingredients-input").focus();
  //display the arrow up
  getElement("#filter__ingredients__title--icon--up").style.display = "block";
  //expand the ingredients container
  if (mediaQuery.matches) {
    getElement(".filter__ingredients--container").style.width = "300px";
    getElement(".filter__ingredients--container").style.height = "auto";
  } else {
    getElement(".filter__ingredients--container").style.width = "667px";
    getElement(".filter__ingredients--container").style.height = "auto";
  }

  //reduce the appliances input container
  arrowApplianceUp();
  //reduce the ustensils input container
  arrowUstensilUp();
};

const arrowUp = () => {
  console.log("second");
  //show the ingredient's button
  getElement(".filter__ingredients__title").style.display = "flex";
  //hide ingredient's input search
  getElement("#ingredients-input").style.display = "none";
  //hide the arrow up
  getElement("#filter__ingredients__title--icon--up").style.display = "none";
  //reduce the ingredients container

  getElement(".filter__ingredients--container").style.width = "17rem";
  getElement(".filter__ingredients--container").style.height = "6.9rem";
  if (mediaQuery.matches) {
    getElement(".filter__appliances").style.display = "";
    getElement(".filter__ustensils").style.display = "";
  }
};

const arrowApplianceDown = () => {
  //hide the appliance button
  getElement(".filter__appliances__title").style.display = "none";
  //display appliances input
  getElement("#appliances-input").style.display = "block";
  //add focus on appliances  input
  getElement("#appliances-input").focus();
  //display the arrow up
  getElement("#filter__appliances__title--icon--up").style.display = "block";
  //expand the appliances container
  if (mediaQuery.matches) {
    getElement(".filter__appliances--container").style.width = "300px";
    getElement(".filter__appliances--container").style.height = "auto";
  } else {
    getElement(".filter__appliances--container").style.width = "667px";
    getElement(".filter__appliances--container").style.height = "auto";
  }

  //reduce the appliances input container
  arrowUp();
  //reduce the ustensils input container
  arrowUstensilUp();
};

const arrowApplianceUp = () => {
  //show the appliance's button
  getElement(".filter__appliances__title").style.display = "flex";
  //hide appliance's input search
  getElement("#appliances-input").style.display = "none";
  //hide the arrow up
  getElement("#filter__appliances__title--icon--up").style.display = "none";
  //reduce the appliances container
  getElement(".filter__appliances--container").style.width = "17rem";
  getElement(".filter__appliances--container").style.height = "6.9rem";
};

const arrowUstensilDown = () => {
  //hide the ustensil button
  getElement(".filter__ustensils__title").style.display = "none";
  //display ustensils input
  getElement("#ustensils-input").style.display = "block";
  //add focus on ustensils  input
  getElement("#ustensils-input").focus();
  //display the arrow up
  getElement("#filter__ustensils__title--icon--up").style.display = "block";
  //expand the ustensils container
  if (mediaQuery.matches) {
    getElement(".filter__ustensils--container").style.width = "300px";
    getElement(".filter__ustensils--container").style.height = "auto";
  } else {
    getElement(".filter__ustensils--container").style.width = "667px";
    getElement(".filter__ustensils--container").style.height = "auto";
  }

  //reduce the appliances input container
  arrowUp();
  //reduce the ingredients input container
  arrowApplianceUp();
};

const arrowUstensilUp = () => {
  //show the ustensil's button
  getElement(".filter__ustensils__title").style.display = "flex";
  //hide ustensil's input search
  getElement("#ustensils-input").style.display = "none";
  //hide the arrow up
  getElement("#filter__ustensils__title--icon--up").style.display = "none";
  //reduce the ustensils container
  getElement(".filter__ustensils--container").style.width = "17rem";
  getElement(".filter__ustensils--container").style.height = "6.9rem";
};

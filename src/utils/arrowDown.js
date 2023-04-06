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

  // show search input
  // show the list of ingredients
  //display the list of ingredients
};

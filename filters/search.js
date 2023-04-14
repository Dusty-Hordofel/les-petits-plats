// import { recipesCards } from "../components/recipe_card.js";

/*export*/ const filterSearch = (data) => {
  //get the form and the input
  const form = getElement(".search__input-container");
  const nameInput = getElement(".search__input");

  //add an event listener to the form
  form.addEventListener("keyup", function () {
    const value = nameInput.value;
    // console.log("🚀 ~ file: search.js:9 ~ value:", value);

    if (value) {
      //filter the data based on the value of the input
      const newData = data.filter((receipe) => {
        let { name, appliance, ingredients, description, ustensils } = receipe;
        console.log(ingredients.map((ingredient) => ingredient.ingredient));

        //verifier si le nom de la recette est inclus dans l'input
        name = name.toLowerCase().startsWith(value);
        //verifier si le nom du materiel est inclu dans l'input
        appliance = appliance.toLowerCase().startsWith(value);
        //verifier si le nom saisie est inclu dans la description
        description = description.toLowerCase().startsWith(value);

        //verifier si la valeur saisie correspond à l'ustensile
        ustensils = ustensils.includes(value) ? value : "";

        //mettre les ingrédients dans un tableau et vérifier si la valeur de l'input est incluse dans chacun des tableaux
        ingredients = ingredients
          .map((ingredient) => {
            return ingredient.ingredient;
          })
          .includes(value)
          ? value
          : "";

        //renvoi la recette s'il y a une correspondance
        if (name || appliance || description || ustensils || ingredients) {
          return receipe;
        }
      });
      // console.log("🚀 ~ file: search.js:21 ~ newData ~ newData:", newData);
      //display filtered data in the receipes container
      recipesCards(getElement("#recipes"), newData);

      //if there is no data that matches the input value, display an error message
      if (newData.length < 1) {
        const recipes = getElement("#recipes");
        recipes.innerHTML = `<h3 class="filter-error">
         Désolé, aucune recette ne correspond à votre recherche
         </h3>`;
      }
    } else {
      //if the input is empty, display all the data
      recipesCards(getElement("#recipes"), data);
    }
  });
};

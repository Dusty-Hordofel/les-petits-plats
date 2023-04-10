// import { recipesCards } from "../components/recipe_card.js";

export const filterSearch = (data) => {
  //get the form and the input
  const form = getElement(".search__input-container");
  const nameInput = getElement(".search__input");

  //add an event listener to the form
  form.addEventListener("keyup", function () {
    const value = nameInput.value;
    console.log("🚀 ~ file: search.js:9 ~ value:", value);

    if (value) {
      //filter the data based on the value of the input
      const newData = data.filter((receipe) => {
        let { name, appliance, description, ustensils } = receipe;
        // console.log(
        //   "🚀 ~ file: search.js:17 ~ newData ~ ustensils:",
        //   ustensils
        // );

        name = name.toLowerCase();
        appliance = appliance.toLowerCase();
        description = description.toLowerCase();

        // ustensils = ustensils.map((ustensil) => ustensil.toLowerCase());
        ustensils = ustensils.includes(value) ? value : "";
        console.log(
          "🚀 ~ file: search.js:28 ~ newData ~ ustensils:",
          ustensils
        );
        //ustensils.includes(value)
        if (
          name.startsWith(value) ||
          appliance.startsWith(value) ||
          description.startsWith(value) ||
          ustensils
        ) {
          return receipe;
        }
      });
      console.log("🚀 ~ file: search.js:21 ~ newData ~ newData:", newData);
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

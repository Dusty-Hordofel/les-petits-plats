const getRecipesData = async () => {
  const response = await fetch("data/recipes.json");
  let recipes = (await response.json()).recipes;
  return recipes;
};

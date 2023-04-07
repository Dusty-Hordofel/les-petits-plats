const getRecipesPromise = async () => {
  const response = await fetch("/data/recipes.json");
  const data = await response.json();
  return data;
};

const getRecipesData = async () => {
  const { recipes } = await getRecipesPromise();
  console.log("🚀 ~ file: api.js:9 ~ getRecipesData ~ recipes:", recipes);
  return recipes;
};
getRecipesData();

export { getRecipesData };

const ingredients = async () => {
  const recipes = await getRecipesData();
  console.log("🚀 ~ file: api.js:18 ~ ingredients ~ recipes:", recipes);
};

ingredients();

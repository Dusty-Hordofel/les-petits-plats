const getRecipesPromise = async () => {
  const response = await fetch("../recipes.json");
  const text = await response.text();
  const json = JSON.parse(text);
  // const data = await response.json();
  return json;
};

const getRecipesData = async () => {
  const { recipes } = await getRecipesPromise();
  console.log("🚀 ~ file: api.js:9 ~ getRecipesData ~ recipes:", recipes);
  return recipes;
};
// getRecipesData();

const ingredients = async () => {
  const recipes = await getRecipesData();
  console.log("🚀 ~ file: api.js:18 ~ ingredients ~ recipes:", recipes);
};

ingredients();

export { getRecipesData, ingredients };

// const getRecipesPromise = async () => {
//   const response = await fetch("../recipes.json");
//   const data = await response.json();
//   return data;
// };
// let recipes = [];

const getRecipesData = async () => {
  const response = await fetch("data/recipes.json");
  let recipes = (await response.json()).recipes;
  console.log("🚀 ~ file: api.js:10 ~ getDataJson ~ recipes:", recipes);
  return recipes;
  // return data;
};

getRecipesData();
// console.log(recipes);
// console.log(recipes);
// async function getDataJson() {
//   const response = await fetch("data/recipes.json");
//   recipes = (await response.json()).recipes;
//   console.log("🚀 ~ file: api.js:10 ~ getDataJson ~ recipes:", recipes);
//   // init();
// }
// getDataJson();

// const getRecipesData = async () => {
//   const { recipes } = await getRecipesPromise();
//   console.log("🚀 ~ file: api.js:9 ~ getRecipesData ~ recipes:", recipes);
//   return recipes;
// };
// getRecipesData();

// const ingredients = async () => {
//   const recipes = await getRecipesData();
//   console.log("🚀 ~ file: api.js:18 ~ ingredients ~ recipes:", recipes);
// };

// ingredients();

// export { getRecipesData, ingredients };

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    eqeqeq: "off",
    "no-console": "off",
  },
  globals: {
    use: false,
  },
};

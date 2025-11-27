// .eslintrc.cjs
module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  plugins: ["react", "react-hooks"],

  rules: {
    "no-unused-vars": "warn",

    // Good DX defaults
    "react/react-in-jsx-scope": "off", // Not needed in React 17+
    "react/prop-types": "off", // Many devs use TS or no prop-types
  },
};

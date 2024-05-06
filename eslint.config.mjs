import globals from "globals";
import pluginJs from "@eslint/js";
import immutableBindings from "eslint-plugin-immutable-bindings";

export default [
  {
    files: ["**/*.js"],
    plugins: {
      ib: immutableBindings
    },
    languageOptions: {sourceType: "module"},
    rules: {
      'ib/no-reassign': 'error',
    }
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];
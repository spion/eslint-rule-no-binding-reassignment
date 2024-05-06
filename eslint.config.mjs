import globals from "globals";
import pluginJs from "@eslint/js";
import immutableBindings from "eslint-plugin-immutable-bindings";

export default [
  {
    files: ["**/*.js"],
    plugins: [immutableBindings],
    languageOptions: {sourceType: "commonjs"},
    rules: {
      'immutable-bindings/no-reassign': 'error',
    }
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];
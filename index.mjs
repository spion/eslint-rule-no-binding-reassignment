import noReassign from './no-reassign.js'
let plugin = {

  // preferred location of name and version
  meta: {
      name: "eslint-plugin-immutable-bindings",
      version: "1.0.0"
  },
  rules: {
    "no-reassign": noReassign
  }
};

// for ESM
export default plugin;

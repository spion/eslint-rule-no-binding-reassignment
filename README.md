# eslint-plugin-immutable-bindings

An ESLint plugin that disallows binding reassignments. Should be significantly more effective
than `prefer-const` as it also addresses bindings derived from function arguments.

## Installation

You can install this plugin using npm:

```
npm install eslint-plugin-immutable-bindings --save-dev
```

## Usage

Add `"immutable-bindings"` to your ESLint configuration’s `plugins` array, then use
the rule `no-reassign` provided by it:


```js
// eslint.config.mjs
import immutableBindings from "eslint-plugin-immutable-bindings";

export default [
  {
    plugins: {
      ib: immutableBindings
    },
    rules: {
      'ib/no-reassign': 'error'
    }
  },
];
```

## Configuration Examples

### Allow Variables Starting with “mut”

To allow reassignment for variables whose names start with “mut”:

```js
// eslint.config.mjs
import immutableBindings from "eslint-plugin-immutable-bindings";

export default [
  {
    plugins: {
      ib: immutableBindings
    },
    rules: {
      'ib/no-reassign': ['error', { allowPattern: '^mut' }],
    }
  },
];
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

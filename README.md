# eslint-plugin-immutable-bindings

An ESLint plugin that disallows binding reassignments. Should be significantly more effective
than `prefer-const` as it also addresses bindings derived from function arguments.

## Installation

You can install this plugin using npm:

```
npm install eslint-plugin-immutable-bindings --save-dev
```

## Usage

Add `"immutable-bindings"` to your ESLint configuration’s `plugins` array:


```js
// .eslintrc.js
module.exports = {
  plugins: ['immutable-bindings'],
  rules: {
    'immutable-bindings/no-reassign': 'error',
  },
};
```

## Configuration Examples

### Allow Variables Starting with “mut”

To allow reassignment for variables whose names start with “mut”:


```js
// .eslintrc.js
module.exports = {
  plugins: ['immutable-bindings'],
  rules: {
    'immutable-bindings/no-reassign': ['error', { allowPattern: '^mut' }],
  },
};
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

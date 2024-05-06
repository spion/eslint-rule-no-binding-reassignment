# eslint-plugin-immutable-bindings

An ESLint plugin that disallows binding reassignments. Should be significantly more effective
than `prefer-const` as it also addresses bindings derived from function arguments.

## Why is this better than `prefer-const`?

1. It can address reassignments of function arguments
   ```js
   function test (a) {
     a = 2;
   }
   ```

   yields:
   ```
     11:3   error  Binding reassignment is not allowed for variable 'a'  ib/no-reassign
   ```

   This works for destructured arguments too, i.e.

   ```js
   function test ({a}) {
     a = 2;
   }
   ```

   should result with the same error

2. You can force a prefix using `{allowPattern: "^mut"}`, which is visible everywhere in the code

   ```js
   let mutItem = 5;

   // ...
   // reassign
   mutItem = 8;

   // ...
   useCode(mutItem) // very aware of mutable binidng usage sites,
                    // even in code reviews on github
   ```

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

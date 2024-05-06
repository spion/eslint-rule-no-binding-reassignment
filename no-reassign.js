/**
 * @fileoverview Disallow reassignment of any bindings.
 * @author Gjorgji Kjosev
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export default {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow binding reassignments',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [
      {
        type: 'object',
        properties: {
          allowPattern: {
            type: ['string', 'null'],
            description: "Allow reassignment of variables that match this pattern, e.g. \"^mut\"",
            default: null,
          },
        },
      },
    ],
  },
  create(context) {
    let allowPatternString = context.options[0]?.allowPattern;
    let allowPattern = allowPatternString != null ? new RegExp(allowPatternString) : null;


    return {
      AssignmentExpression(node) {
        if (node.left.type === 'Identifier') {
          const variableName = node.left.name;
          if (!allowPattern || !allowPattern.test(variableName)) {
            context.report({
              node,
              message: `Binding reassignment is not allowed for variable '${variableName}'`,
            });
          }
        }
      },
    };
  },
};

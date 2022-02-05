module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    "sort-imports-es6-autofix"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    // Standard Typescript definitions

    // TypeScript has this functionality by default:
    'no-undef': 'off',

    // Rules replaced by @typescript-eslint versions:
    camelcase: 'off',
    indent: 'off',
    'no-array-constructor': 'off',
    'no-empty-function': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',

    // @typescript-eslint versions of Standard.js rules:
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false
    }],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: false, typedefs: false }],
    '@typescript-eslint/no-useless-constructor': 'error',

    // New Typescript-only rules:
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never'
      }
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowExpressions: true,
      allowHigherOrderFunctions: true,
      allowTypedFunctionExpressions: true
    }],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'none' },
        singleline: { delimiter: 'comma', requireLast: false }
      }
    ],
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/triple-slash-reference': ['error', { lib: 'never', path: 'never', types: 'never' }],
    '@typescript-eslint/type-annotation-spacing': 'error',

    // possible errors
    "no-console": ["error", {
      "allow": ["warn", "error"]
    }],
    "no-unexpected-multiline": ["error"],
    // best pratices
    "block-scoped-var": ["error"],
    "curly": ["error", "multi-line"],
    "default-case": ["error"],
    "dot-notation": ["error"],
    "eqeqeq": ["error"],
    "no-alert": ["error"],
    "no-else-return": ["error"],
    "no-eval": ["error"],
    "no-floating-decimal": ["error"],
    "no-multi-spaces": ["error"],
    "no-octal": ["error"],
    "no-sequences": ["error"],
    "radix": ["error"],
    // variables
    "no-shadow": ["error"],
    // stylistic issues
    "array-bracket-newline": ["error", "consistent"],
    "array-element-newline": ["error", {
      "multiline": true,
      "minItems": 3
    }],
    "brace-style": ["error", "1tbs", {
      "allowSingleLine": true
    }],
    "function-paren-newline": ["error", "multiline"],
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "MemberExpression": 1,
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "FunctionDeclaration": {
        "body": 1,
        "parameters": 2
      }
    }],
    "lines-around-comment": ["error", {
      "beforeBlockComment": true,
      "beforeLineComment": true
    }],
    "max-len": ["error", {
      "code": 160,
      "ignoreComments": true,
      "ignoreTrailingComments": true,
      "ignorePattern": "^import",
      "ignoreUrls": true,
      "ignoreStrings": true
    }],
    "no-multiple-empty-lines": ["error", {
      "max": 2
    }],
    "no-tabs": ["error"],
    "no-trailing-spaces": ["error"],
    "one-var": ["error", "never"],
    "semi": ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    // ecma script 6
    "arrow-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "no-duplicate-imports": ["error"],
    "no-var": ["error"],
    "prefer-const": ["error", {
      "destructuring": "any"
    }],
    // custom plugins
    // sort imports es6
    "sort-imports-es6-autofix/sort-imports-es6": ["error", {
      "ignoreCase": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }],
    //typescript parser
    "@typescript-eslint/no-extraneous-class": ["error", {
      "allowConstructorOnly": true,
      "allowEmpty": true,
      "allowStaticOnly": true
    }],
    "@typescript-eslint/strict-boolean-expressions": ["off"],
    "@typescript-eslint/no-parameter-properties": ["off"],
    "@typescript-eslint/no-floating-promises": ["off"],
    "@typescript-eslint/no-inferrable-types": ["off"],
    "@typescript-eslint/restrict-plus-operands": 0,
    "@typescript-eslint/no-explicit-any": ["off"],
    "max-lines": [1, {"max": 500, "skipBlankLines": true}]
  },
};
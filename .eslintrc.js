module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/typescript/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-unused-components': [process.env.NODE_ENV === 'production' ? 'error' : 'warn'],
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    '@typescript-eslint/no-unused-vars': [process.env.NODE_ENV === 'production' ? 'error' : 'warn'],

    '@typescript-eslint/no-empty-function': ['warn'],
    'object-shorthand': ['error', 'always'],

    indent: ['error', 2],
    'linebreak-style': 'off',
    'eol-last': ['error', 'never'],
    'max-len': ['error', { code: 450 }],
    'space-before-function-paren': ['error', 'always'],

    'vue/html-indent': ['error', 2, {
      attribute: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'beside',
    }],
    'vue/max-attributes-per-line': ['warn', {
      singleline: {
        max: 2,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],

    'vue/multi-word-component-names': 'off',
    'no-empty-function': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],

    // // These are weird inconsistencies between eslint and typescript eslint integration. Need to make some GitHub issues.
    // 'no-shadow': 'off',
    // '@typescript-eslint/no-shadow': ['error'],
    // '@typescript-eslint/no-unused-vars': ['error'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        // '**.vue',
      ],
    },
  ],
};
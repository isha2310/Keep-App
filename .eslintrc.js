module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'linebreak-style': 0,
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/no-children-prop': 0,
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'react/jsx-first-prop-new-line': [1, 'always'],
    'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'always' }],
    'react/function-component-definition': [0, { namedComponents: ['function-declaration' || 'function-expression' || 'arrow-function'], unnamedComponents: ['function-declaration' || 'function-expression' || 'arrow-function'] }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/no-unescaped-entities': 'off',
    'import/no-cycle': [0, { ignoreExternal: true }],
    'prefer-const': 'off',
    'no-use-before-define': 'off',
    'no-restricted-exports': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    "airbnb-typescript/base",
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
    useJSXTextNode: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    'spaced-comment': [
      'error',
      'always',
      { markers: ['/ <reference'] }
    ],
    'max-len': ['error', {'code': 140}],
    'react/prop-types': ['off'],
    'import/extensions': ['off'],
  },
};

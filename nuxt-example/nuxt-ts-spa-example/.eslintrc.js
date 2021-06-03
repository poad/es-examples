module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-self-closing': 'off',
    'space-before-function-paren': 0,
    'vue/no-unused-components': 'off', //追加,
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {'after': true, 'before': false}],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error'
  }
}

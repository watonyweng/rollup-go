module.exports = {
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    esmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
};

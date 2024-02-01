module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12,
  },
  rules: {},
};

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  extends: ['airbnb-base', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'jsx-a11y', 'import'],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    'prettier/prettier': 'error',
    'object-curly-newline': 0,
    'arrow-parens': 0,
    'no-underscore-dangle': 0
  }
};

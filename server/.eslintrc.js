// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  extends: 'airbnb-base',
  // add your custom rules here
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.dev.config.js',
      },
    },
  },
  rules: {
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
      },
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js'],
      },
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-expressions': ['error', { allowTernary: true }],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': process.env.NODE_ENV === 'production' ? ['warn', { allow: ['warn', 'error', 'info'] }] : ['off'],
    'no-plusplus': 0,
    'max-len': ['error', { ignoreComments: true, ignoreTrailingComments: true, ignoreTemplateLiterals: true, code: 150 }],
    camelcase: 0,
    'no-else-return': 0,
  },
};

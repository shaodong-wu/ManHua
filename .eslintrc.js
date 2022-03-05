module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  globals: {
    wx: true,
    App: true,
    getApp: true,
    Page: true,
    Component: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'semi': [2, 'always'],
    'quotes': [2, 'single'],
    'init-declarations': [2, 'always'],
    'indent': [2, 2],
    'no-var': 2,
    'global-require': 2,
    'prefer-template': 2,
    'key-spacing': 2,
    'arrow-body-style': [2, 'as-needed'],
    'comma-dangle': [2, 'only-multiline'],
    'object-property-newline': [2, {
      'allowAllPropertiesOnSameLine': true
    }],
  },
  overrides: [
    {
      files: ['*.wxs'],
      globals: {
        getDate: true,
        getRegExp: true
      },
      rules: {
        'no-var': 0,
        'prefer-template': 0,
      }
    }
  ],
}
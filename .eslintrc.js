const defaultEslintConfig = require('./base.eslint.config');
const a11yConfig = require('eslint-plugin-jsx-a11y');

// base config has jsx-a11y plugin enabled by default. Here we disable that rules.
// https://stackoverflow.com/a/70204960/2179748
const a11yOff = Object.keys(a11yConfig.rules).reduce((acc, rule) => {
  acc[`jsx-a11y/${rule}`] = 'off';
  return acc;
}, {});

const customRules = {
  'import/no-default-export': 'off',
  'no-implicit-coercion': 'off',
};

module.exports = {
  ...defaultEslintConfig,
  ignorePatterns: ['__gql-generated'],
  rules: {
    ...defaultEslintConfig.rules,
    ...a11yOff,
    ...customRules,
  },
  extends: defaultEslintConfig.extends,
  overrides: defaultEslintConfig.overrides,
};

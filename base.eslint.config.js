module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'simple-import-sort'],
  rules: {
    eqeqeq: ['error', 'allow-null'],
    'arrow-body-style': ['error', 'as-needed'],
    'import/no-default-export': 'error',
    'no-unsafe-optional-chaining': 'error',
    'default-case': 'error',
    'no-empty': 'error',
    'prefer-const': 'error',
    'no-else-return': 'error',
    'no-implicit-coercion': ['error', { disallowTemplateShorthand: false }],
    'no-nested-ternary': 'error',
    'no-useless-computed-key': 'error',
    'no-use-before-define': 'error',
    'no-param-reassign': ['error', { props: false }],
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-fragments': ['error', 'syntax'],
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          /* import 'foo*' or import '@foo*' */
          [`^\\u0000@?\\w`],
          /* import '#foo*' */
          ['^\\u0000#\\w'],
          /* import './foo*' or import '../foo*' */
          ['^\\u0000\\.'],
          /* import ... from 'fs' */
          [`^@?\\w`],
          /* import ... from '#foo*' */
          ['^#\\w'],
          /* import ... from './foo*' or import ... from '../foo*' */
          ['^\\.'],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: './',
        project: 'tsconfig.json',
      },
    },
  ],
};

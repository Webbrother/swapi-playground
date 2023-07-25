module.exports = defaultLintStagedConfig = {
  '*.{ts,js,tsx,jsx}': ['eslint --fix', 'prettier --write'],
  '*.{md,mdx,css,scss,yaml,yml}': ['prettier --write'],
};

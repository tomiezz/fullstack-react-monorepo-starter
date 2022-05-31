module.exports = {
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
  ],
};

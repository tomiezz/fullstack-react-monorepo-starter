module.exports = {
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};

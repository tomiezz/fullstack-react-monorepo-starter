module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@shared': '../shared/src',
        },
      },
    ],
  ],
};

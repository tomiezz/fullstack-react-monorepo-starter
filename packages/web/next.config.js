const path = require('path');
const withTM = require('next-transpile-modules')(['@frms/shared'], {
  resolveSymlinks: true,
});

module.exports = withTM({
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];
    config.resolve.alias['react-native-web'] = path.resolve(
      __dirname,
      '.',
      'node_modules',
      'react-native-web',
    );

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});

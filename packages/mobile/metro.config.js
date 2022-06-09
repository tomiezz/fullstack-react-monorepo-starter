/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const appDir = __dirname;
const rootDir = path.resolve(__dirname, '..');

const sharedDir = path.resolve(__dirname, '..', 'shared');

const buildResolver = () => {
  const blockList = [];
  const extraNodeModules = {};
  const sharedPackageJson = require(path.resolve(sharedDir, 'package.json'));
  for (const sharedPeerDep in sharedPackageJson.peerDependencies) {
    blockList.push(new RegExp(`${sharedDir}/node_modules/${sharedPeerDep}/.*`));

    extraNodeModules[sharedPeerDep] = path.resolve(
      appDir,
      'node_modules',
      sharedPeerDep,
    );
  }
  return { blockList, extraNodeModules };
};

const { blockList, extraNodeModules } = buildResolver();

console.log('BLOCKLIST: ', blockList);
console.log('EXTRAMODULES: ', extraNodeModules);

module.exports = {
  watchFolders: [appDir, sharedDir],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    blockList: exclusionList(blockList),
    extraNodeModules,
  },
};

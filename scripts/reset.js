import {
  webDir,
  apiDir,
  mobileDir,
  repoDir,
  sharedDir,
} from './helpers/dir.js';
import shelljs from 'shelljs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const rootPath = process.cwd();
const dirList = {
  api: apiDir,
  mobile: mobileDir,
  repo: repoDir,
  shared: sharedDir,
  web: webDir,
};

const removeDependencies = () => {
  Object.keys(dirList).map((dirKey) => {
    shelljs.rm(
      '-rf',
      `${dirList[dirKey]}/node_modules`,
      `${dirList[dirKey]}/package-lock.json`,
      `${dirList[dirKey]}/yarn.lock`,
    );
  });
};

const restorePackageJson = () => {
  Object.keys(dirList).map((dirKey) => {
    shelljs.cp(
      `${rootPath}/scripts/templates/${dirKey}.package.json`,
      `${dirList[dirKey]}/package.json`,
    );
  });
};

restorePackageJson();
removeDependencies();

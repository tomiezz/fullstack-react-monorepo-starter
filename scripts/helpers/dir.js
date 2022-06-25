import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoDir = path.resolve(__dirname, '../..');
const webDir = path.resolve(repoDir, 'packages', 'web');
const apiDir = path.resolve(repoDir, 'packages', 'api');
const mobileDir = path.resolve(repoDir, 'packages', 'mobile');
const sharedDir = path.resolve(repoDir, 'packages', 'shared');

export { repoDir, webDir, apiDir, mobileDir, sharedDir };

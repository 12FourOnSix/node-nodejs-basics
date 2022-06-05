import { rename } from 'fs/promises';
import { createRequire } from 'module';
import { existsSync } from 'fs';
import { join } from 'path';

const 
  require = createRequire(import.meta.url),
  path = require('path'),
  { release, version } = require('os'),
  { createServer: createServerHttp } = require('http'),
  currentFilePath = import.meta.url.replace('file:///', ''),
  currentDirPath = currentFilePath.replace(/\/\w+\.\w+$/, ''),
  oldFileName = join(currentDirPath, '/files/c.js'),
  newFileName = join(currentDirPath, '/files/c.cjs'),
  cjsFileNamePath = join(import.meta.url.replace(/\/\w+\.\w+$/, ''), '/files/c.cjs');

const renameFile = async (oldName, newName) => {
  if (existsSync(oldName) && !existsSync(newName)) {
    return await rename(oldName, newName);
  }
};

renameFile(oldFileName, newFileName);
await import(cjsFileNamePath); 

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${currentFilePath}`);
console.log(`Path to current directory is ${currentDirPath}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};
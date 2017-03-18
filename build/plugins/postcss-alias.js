'use strict';

// core
const fs = require('fs');
const { join, extname } = require('path');

// modules
const postcssImport = require('postcss-import');

const isDir = (path) => {
  // eslint-disable-next-line no-sync
  return fs.statSync(path).isDirectory();
};

module.exports = (aliases = {}) => {
  return postcssImport({
    resolve(path = '') {
      const [module, ...rest] = path.split('/');
      if (module in aliases) {
        const alias = aliases[module];
        if (!isDir(alias)) return alias;

        let newPath = rest.join('/');
        if (!extname(newPath)) newPath += '.pcss';
        return join(alias, newPath);
      }
      return path;
    },
  });
};

'use strict';

const fse = require('fs-extra');

const getConfigPath = require('./get-config-path');

/**
 * Checks if `dir` is a TypeScript directory (whether there is a tsconfig file or not)
 * @param {string} dir
 * @param {string | undefined} filename
 * @returns {Promise<boolean>}
 */
module.exports = (dir, filename = undefined) => {
  const filePath = getConfigPath(dir, filename);

  return fse.pathExists(filePath);
};
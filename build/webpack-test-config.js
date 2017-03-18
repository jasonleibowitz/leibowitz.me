/* note: only resolve is used from this file */
'use strict';

const alias = require('../alias');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias,
  },
};

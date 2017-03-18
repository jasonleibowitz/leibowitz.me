/* eslint-disable no-console */
'use strict';

// Modules
const webpack = require('webpack');

// Files
const webpackConfigFactory = require('./webpack-config-factory');

/* eslint-disable no-process-env */
const env = process.env.NODE_ENV || 'production';
/* eslint-enable no-process-env */

const config = webpackConfigFactory({ env });

// This will result in a much larger bundle, with much slower code
// It is probably an accident
if (env === 'development') {
  console.warn('WARNING: You are building with NODE_ENV=development');
}

webpack(config, (err, stats) => {
  if (err) console.log('err:', err);
  console.log(stats);
});

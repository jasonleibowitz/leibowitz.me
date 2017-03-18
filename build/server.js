/* eslint-disable no-console */
'use strict';

// Module
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

// File
const webpackConfigFactory = require('./webpack-config-factory');

/* eslint-disable no-process-env */
const {
  NODE_ENV: env = 'development',
  PORT: port = 3000,
} = process.env;
/* eslint-enable no-process-env */

const config = webpackConfigFactory({ env });
const host = 'localhost';

// This will disable disable caching and make the sourcecode impossible to read
// It is probably an accident
if (env === 'production') {
  console.warn('WARNING: You are developing with NODE_ENV=production');
}

new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}).listen(port, host, (err, result) => {
  if (err) console.log(err);
  console.log(`Listening at http://${ host }:${ port }`);
});

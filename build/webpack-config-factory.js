'use strict';

// Core
const { join, resolve } = require('path');

// Module
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const postcssCalc = require('postcss-calc');

// File
const postcssAlias = require('./plugins/postcss-alias');

const root = resolve(__dirname, '..');

// TODO: These should be passed in config
/* eslint-disable no-process-env */
const {
  PORT = 3000,
  RFR_API_HOST,
} = process.env;
/* eslint-enable no-process-env */

const src = join(root, 'src');

// Setup
const serializeEnvVars = envVars => {
  return Object.keys(envVars).reduce((obj, key) => {
    obj[key] = JSON.stringify(envVars[key]);
    return obj;
  }, {});
};

const jsxLoader = {
  // All JSX files get transpiled with react
  test: /\.jsx$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          'react',
          ['es2015', { modules: false }],
          'stage-2',
        ],
        plugins: [
          'react-hot-loader/babel',
          'transform-decorators-legacy',
          'babel-plugin-transform-export-extensions',
        ],
      },
    },
    'eslint-loader',
  ],
};

/* eslint-disable max-statements */
module.exports = function webpackConfigFactory({ env = 'development' } = {}) {
  // FIXME: things break if alias is required outside of this func. - CD
  const alias = require('../alias');

  const isProduction = env === 'production';
  const localIdentName = (env !== 'production') ? '[name]--[local]' : '[name]--[hash:base64:5]';
  const styleLoader = `style-loader?sourceMap=${ !isProduction }`;

  const webpackConfig = {
    context: __dirname,
    cache: !isProduction,
    devtool: isProduction ? false : 'source-map',
    entry: {
      app: [
        'babel-polyfill',
        join(src, 'index.jsx'),
      ],
    },
    output: {
      path: join(root, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          // Matches local styles (excludes node_modules)
          test: /\.pcss$/,
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: !isProduction,
                modules: true,
                camelCase: true,
                importLoaders: 1,
                localIdentName,
              },
            },
            {
              loader: 'postcss-loader',
            },
          ],
          exclude: resolve(__dirname, 'node_modules'),
        },
        {
          // Matches vendor styles (in node_modules)
          // Bundles css without transforms / modules
          test: /\.css$/,
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[name]---[local]---[hash:base64:5]',
              },
            },
          ],
          include: resolve(__dirname, 'node_modules'),
        },
        {
          // react-toolbox requires scss files
          test: /\.scss$/,
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: !isProduction,
                modules: true,
                camelCase: true,
                importLoaders: 1,
                localIdentName: '[name]---[local]---[hash:base64:5]',
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },

        /* Script / JSON Files */
        {
          // JS files that live outside of node_modules get transpiled without react
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['es2015', { modules: false }],
                  'stage-2',
                ],
                plugins: [
                  'react-hot-loader/babel',
                  'transform-decorators-legacy',
                  'babel-plugin-transform-export-extensions',
                ],
              },
            },
            'eslint-loader',
          ],
          exclude: /(node_modules)/,
        },
        jsxLoader,
        {
          test: /\.json$/,
          use: ['json-loader'],
        },

        /* Image Files */
        {
          test: /\.(jpe?g|png|gif)$/,
          use: {
            loader: 'url-loader',
            query: {
              limit: 10000,
            },
          },
        },
        {
          test: /\.svg(\?\S*)?$/,
          use: isProduction ? 'file-loader?name=[name]-hash.[ext]' : 'url-loader?limit=10000',
        },

        /* Font Files */
        {
          test: /\.(otf|eot|ttf|woff2?)(\?\S*)?$/,
          use: isProduction ? 'file-loader?name=[name]-hash.[ext]' : 'url-loader?limit=10000',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias,
    },
    plugins: [
      new DashboardPlugin({ port: 3000 }),
      new ExtractTextPlugin({
        filename: 'bundle.css',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'Jason Leibowitz | Software Engineer',
        favicon: join(src, 'static/images/favicon.ico'),
        description: 'Jason Leibowitz, Software Engineer',
        template: join(src, 'static/index-template.ejs'),
      }),
      new webpack.DefinePlugin({
        'process.env': serializeEnvVars({
          /* eslint-disable no-process-env */
          NODE_ENV: env,
          RFR_API_HOST,
          PORT,
          /* eslint-enable no-process-env */
        }),
      }),
      new webpack.LoaderOptionsPlugin({
        test: /\.pcss$/,
        debug: (env === 'development'),
        options: {
          postcss: [
            postcssAlias(alias),
            precss(),
            autoprefixer(),
            postcssCalc(),
          ],
          context: __dirname,
          output: {
            path: join(root, 'dist'),
          },
        },
      }),
    ],
  };

  if (!isProduction) {
    webpackConfig.entry.app.push(
      `webpack-dev-server/client?http://0.0.0.0:${ PORT }`,
      'webpack/hot/only-dev-server'
    );
    jsxLoader.use[0].options.plugins.push('transform-react-jsx-self');
  }

  if (isProduction) {
    jsxLoader.use[0].options.plugins.push('transform-react-constant-elements');

    // Minify in production
    webpackConfig.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress:{
          warnings: false,
        },
      })
    );
  }

  return webpackConfig;
};
/* eslint-enable max-statements */

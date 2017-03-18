'use strict';

// core
const path = require('path');

// modules
const { expect } = require('chai');

// files
const webpackConfigFactory = require('../webpack-config-factory');

describe('webpack-config-factory', () => {

  let webpackConfig;
  beforeEach(() => {
    webpackConfig = webpackConfigFactory();
  });

  it('should return an object', () => {
    expect(webpackConfig).to.be.an('object');
  });

  it('should build to ./dist', () => {
    const resolved = path.resolve(__dirname, '../../dist');
    expect(webpackConfig.output.path).to.eql(resolved);
  });

  it('should add an entry for babel-polyfill', () => {
    expect(webpackConfig.entry.app).to.include('babel-polyfill');
  });

  it('should resolve common files without extensions', () => {
    const ext = ['.js', '.jsx', '.json'];
    expect(webpackConfig.resolve.extensions).to.eql(ext);
  });

  it('should define bundle environment variables');

  it('should minify code in production', () => {

  });

  describe('loaders', () => {

    describe('pcss', () => {

      it('should enable css modules');

      it('should exclude node_modules');

      it('should include postcss plugins');

    });

    describe('css', () => {

      it('should include node_modules');

    });

    describe('scss', () => {});

    describe('js', () => {

      it('should transpile with babel stage-2');

      it('should transpile decorators');

      it('should exclude node_modules');

    });

    describe('jsx', () => {

      it('should transpile with babel stage-2');

      it('should transpile decorators');

      it('should exclude node_modules');

    });

    describe('images and fonts', () => {

      it('should use url-loader in development');

      it('should use file-loader in production');

    });

  });

  describe('env = development', () => {

    it('should add an entry for webpack-dev-server', () => {
      const port = 3000;
      const webpackConfig = webpackConfigFactory({ env: 'development', port });
      expect(webpackConfig.entry.app).to.include(`webpack-dev-server/client?http://0.0.0.0:${ port }`);
    });

    it('should add an entry for hot-reload', () => {
      const webpackConfig = webpackConfigFactory({ env: 'development' });
      expect(webpackConfig.entry.app).to.include('webpack/hot/only-dev-server');
    });

    describe('css loader', () => {

      it('should create source maps');

      it('should display human-readable classnames');

    });

    describe('pcss loader', () => {

      it('should create source maps');

      it('should display human-readable classnames');

    });

    describe('js loader', () => {

      it('should include react hot loader');

    });

    describe('jsx loader', () => {

      it('should include react hot loader');

      it('should include transform-react-jsx-self');

    });

  });

  describe('env = production', () => {

    it('should disable devtool', () => {
      const webpackConfig = webpackConfigFactory({ env: 'production' });
      expect(webpackConfig.devtool).to.eql(false);
    });

    it('should not cache', () => {
      const webpackConfig = webpackConfigFactory({ env: 'production' });
      expect(webpackConfig.cache).to.eql(false);
    });

    describe('css loader', () => {

      it('should uglify classnames');

      it('should not create source maps');

    });

    describe('pcss loader', () => {

      it('should uglify classnames');

      it('should not create source maps');

    });

    describe('js loader', () => {

      it('should not include react hot loader');

    });

    describe('jsx loader', () => {

      it('should not include react hot loader');

      it('should include transform-react-constant-elements');

    });

  });

});

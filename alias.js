'use strict';

// core
const { join, resolve } = require('path');

const root = resolve(__dirname);
const src = join(root, 'src');
const fromSrc = (path) => join(src, path);

module.exports = {
  src,

  actions: fromSrc('actions'),
  components: fromSrc('components'),
  config: fromSrc('config'),
  log: fromSrc('log'),
  models: fromSrc('models'),
  reducers: fromSrc('reducers'),
  routes: fromSrc('routes'),
  services: fromSrc('services'),
  store: fromSrc('store'),
  styles: fromSrc('styles'),
  utils: fromSrc('utils'),
  views: fromSrc('views'),

  // static
  data: fromSrc('static/data'),
  fonts: fromSrc('static/fonts'),
  images: fromSrc('static/images'),
};

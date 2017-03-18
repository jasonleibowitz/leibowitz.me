'use strict';

const jsdom = require('jsdom');

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

/* eslint-disable no-undef */
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
/* eslint-enable no-undef */

global.navigator = {
  userAgent: 'node.js',
};

global.localStorage = {
  setItem() {},
};

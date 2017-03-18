/* eslint-disable no-console */

import config from 'config';

const noop = () => {};

let log, warn, error, group, groupEnd;
// only log in development
if (config.env === 'development') {
  log = (...args) => console.log(...args);
  warn = (...args) => console.warn(...args);
  error = (...args) => console.error(...args);
  group = (...args) => console.group(...args);
  groupEnd = (...args) => console.groupEnd(...args);
} else {
  log = noop;
  warn = noop;
  error = noop;
  group = noop;
  groupEnd = noop;
}

export default Object.assign(log, { error, warn, group, groupEnd });

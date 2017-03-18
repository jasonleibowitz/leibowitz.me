/* WARNING: This app config is for the browser. It is bundled and is therefore PUBLIC! */

/* eslint-disable no-process-env, no-undef */
const {
  NODE_ENV = 'development',
  RFR_API_HOST = 'http://ph1.api.rsrv.tech',
} = process.env;
/* eslint-enable no-process-env, no-undef */

module.exports = {
  // current environment
  env: NODE_ENV,

  // Prefix for localStorage items
  cacheKey: 'app_',

  // API Host
  api: {
    host: RFR_API_HOST,
  },
};
/* eslint-enable no-process-env, no-undef */

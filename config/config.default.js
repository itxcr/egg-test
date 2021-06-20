/* eslint valid-jsdoc: "off" */

"use strict";
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1612143882349_1840";

  // add your middleware config here
  // config.middleware = ["forbid"];
  config.middleware = ["auth"];

  // config.forbid = {
  //   ips: [
  //     '127.0.0.1'
  //   ]
  // }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.view = {
    mapping: {
      ".html": "ejs",
    },
  };

  config.session = {
    key: "SESSION_TEST",
    maxAge: 30 * 1000 * 60,
    renew: true,
    httpOnly: true,
    encrypt: true,
  };

  config.api = `http://www.phonegap100.com`;

  return {
    ...config,
    ...userConfig,
  };
};

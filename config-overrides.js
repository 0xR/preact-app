/* eslint-disable no-param-reassign */
const rewireSass = require('react-app-rewire-sass');

/* config-overrides.js */
module.exports = function override(config, env) {
  delete config.eslint.configFile;
  config.eslint.useEslintrc = true;

  config = rewireSass(config, env);

  config.resolve = {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  };

  return config;
};

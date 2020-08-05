const CracoLessPlugin = require('craco-less');
const antdOverrides = require('./antd-overrides')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: antdOverrides,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

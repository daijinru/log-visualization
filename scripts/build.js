const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const util = require('./util');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  entry: util.resolvePath('../src/index.js'),
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
  ],
})

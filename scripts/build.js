const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const util = require('./util');
const commonConfig = require('./common');
const WebpackBar = require('webpackbar');

module.exports = merge(commonConfig, {
  entry: util.resolvePath('../src/index.js'),
  devtool: 'cheap-module-source-map',
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBar(),
  ],
})

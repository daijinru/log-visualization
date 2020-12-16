const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const commonConfig = require('./common');

const resolvePath = (filePath) => {
  return path.resolve(__dirname, filePath);
}

module.exports = merge(commonConfig, {
  entry: resolvePath('../src/index.js'),
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
  ],
})

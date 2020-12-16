const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const Webpack = require('webpack');
const commonConfig = require('./common');
const logger = require('./logger');
const util = require('./util');

const devServerConfig = {
  port: 8001,
  host: 'localhost',
}
const serverUrl = devServerConfig.host + ':' + devServerConfig.port;

const devConfig = merge(commonConfig, {
  entry: util.resolvePath('../index.js'),
  plugins: [
    new HtmlWebpackPlugin({
      template: util.resolvePath('../index.html')
    })
  ],
  mode: 'development',
  devtool: 'source-map'
})

let isFirstCompile = true;
const compiler = Webpack(devConfig);
compiler.hooks.beforeCompile.tap('before compile', () => {
  logger.info('正在编译...');
})
compiler.hooks.done.tap('compiled', stats => {
  if (stats.hasErrors()) {
    return;
  }
  if (isFirstCompile) {
    logger.done(`👏 编译成功，浏览地址：${serverUrl}`);
    isFirstCompile = false;
  } else {
    logger.done(`👏 再次编译成功，浏览地址：${serverUrl}`);
  }
});

new WebpackDevServer(compiler, {
  contentBase: util.resolvePath('../dist'),
  open: true,
  hot: true,
}).listen(devServerConfig.port, devServerConfig.host, err => {
  if (err) {
    console.log();
    logger.error(err);
  }
})

const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const Webpack = require('webpack');
const commonConfig = require('./common');
const logger = require('./logger');

const resolvePath = (filePath) => {
  return path.resolve(__dirname, filePath);
}

const output = resolvePath('../dist');
const devServerConfig = {
  port: 8001,
  host: 'localhost',
}
const serverUrl = devServerConfig.host + ':' + devServerConfig.port;

const devConfig = merge(commonConfig, {
  entry: resolvePath('../index.js'),
  output: {
    filename: 'bundle.js',
    path: output,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('../index.html')
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
compiler.hooks.failed.tap('compile failed', msg => {
  logger.error(msg);
  process.exit(1);
});

new WebpackDevServer(compiler, {
  contentBase: output,
  open: true,
  hot: true,
}).listen(devServerConfig.port, devServerConfig.host, err => {
  if (err) {
    console.log();
    logger.error(err);
  }
})

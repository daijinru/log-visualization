const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const Webpack = require('webpack');
const commonConfig = require('./common');
const logger = require('./logger');
const util = require('./util');
const portfinder = require('portfinder');
const WebpackBar = require('webpackbar');
const chalk = require('chalk');
const FriendlyErrors = require('friendly-errors-webpack-plugin');

const devServerConfig = {
  port: 8001,
  host: 'localhost',
}
const devServerURL = `http://${devServerConfig.host}:${devServerConfig.port}`;

// source code from @vue/cli-service/lib/resolveLoaderError.js
const rules = [
  {
    type: 'cant-resolve-loader',
    re: /Can't resolve '(.*loader)'/,
    msg: (e, match) => (
      `Failed to resolve loader: ${chalk.yellow(match[1])}\n` +
      `You may need to install it.`
    )
  }
];

const transformer = error => {
  if (error.webpackError) {
    const message = typeof error.webpackError === 'string'
      ? error.webpackError
      : error.webpackError.message || '';
    for (const { re, msg, type } of rules) {
      const match = message.match(re);
      if (match) {
        return Object.assign({}, error, {
          type,
          shortMessage: msg(error, match)
        });
      }
    }

    // no match, unknown webpack error without a message.
    // friendly-error-webpack-plugin fails to handle this.
    if (!error.message) {
      return Object.assign({}, error, {
        type: 'unknown-webpack-error',
        shortMessage: message
      });
    }
  }
  return error;
};

const formatter = errors => {
  errors = errors.filter(e => e.shortMessage);
  if (errors.length) {
    return errors.map(e => e.shortMessage);
  }
};

const devConfig = merge(commonConfig, {
  entry: util.resolvePath('../index.js'),
  plugins: [
    new HtmlWebpackPlugin({
      template: util.resolvePath('../index.html')
    }),
    new WebpackBar(),
    new FriendlyErrors({
      compilationSuccessInfo: {
        messages: [
        `Compiled! \n 🌍 browser at ${chalk.green(devServerURL)} \n 📮 feedback: ${chalk.magenta('daijr@ziroom.com')}`,
        ],
      },
      additionalTransformers: [transformer],
      additionalFormatters: [formatter],
    })
  ],
  mode: 'development',
  devtool: 'cheap-source-map'
})

const compiler = Webpack(devConfig);
logger.info(' :) development server it is starting...');

portfinder.basePort = devServerConfig.port;
portfinder.getPort(function (err, port) {
  if (err) throw err;
  new WebpackDevServer(compiler, {
    contentBase: util.resolvePath('../dist'),
    open: true,
    hot: true,
    disableHostCheck: true,
    quiet: true,
    logLevel: 'silent',
    clientLogLevel: 'silent',
  }).listen(port, devServerConfig.host, err => {
    if (err) {
      logger.error(err);
    }
  })
})

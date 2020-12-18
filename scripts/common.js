const util = require('./util');

module.exports = {
  output: {
    filename: 'bundle.js',
    path: util.resolvePath('../dist'),
  },
  module: {
    rules: [
      {
        test: /\.css|scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
          }
        }
      },
      {
        test: /\.art$/,
        use: {
          loader: 'art-template-loader',
          options: {
            escape: false,
          }
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
}

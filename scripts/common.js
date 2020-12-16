const path = require('path');

const resolvePath = (filePath) => {
  return path.resolve(__dirname, filePath);
}

module.exports = {
  output: {
    filename: 'bundle.js',
    path: resolvePath('../dist'),
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
          loader: 'art-template-loader'
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

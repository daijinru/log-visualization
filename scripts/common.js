const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
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
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_componentss)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [require('@babel/preset-env')],
            plugins: [require('@babel/plugin-proposal-object-rest-spread')]
          }
        }
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}

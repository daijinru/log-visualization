module.export = {
  module: [
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
    {
      test: /\.art$/,
      use: {
        loader: 'art-template-loader',
      }
    }
  ]
}
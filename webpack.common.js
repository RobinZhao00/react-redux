const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { NamedModulesPlugin, HotModuleReplacementPlugin } = webpack;


module.exports = {
  entry: {
    app: './src/index.jsx',
    print: './src/print.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: [/node_modules/],
      use: [
        'babel-loader',
        'eslint-loader'
      ]
    },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  }
};

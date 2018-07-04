const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
    plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './rsrc/templates/index_prod.html',
      filename: path.resolve(__dirname, 'index.html'),
    }),
  ],
});

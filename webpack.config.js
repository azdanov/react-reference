// @flow

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname, // Always use project root
  entry: {
    index: ['babel-polyfill', './js/index.js'], // Example of polyfill
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/', // Needed for HMR
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true, // Redirect 404 to index.html
    publicPath: '/public/', // Bundle output directory
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
};

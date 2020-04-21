/* eslint-disable */
'use strict';
const webpack = require('webpack');

const __IS_MOCKED__ = process.env.npm_config_mock;

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
    ]
  },
  // enables loading modules relatively (without the ../../ prefix)
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ],
    modules: [ 'src', 'node_modules' ]
  },
  plugins: [
    new webpack.DefinePlugin({
      // exposed variables build time
      __IS_MOCKED__,
    }),
  ]
};
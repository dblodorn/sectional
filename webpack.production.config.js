/*eslint-env node */
'use strict';
const path = require('path');
const webpack = require('webpack');
const PATHS = {
  app: path.join(__dirname, './public/_js/')
};

module.exports = {
  entry: {
    app: './public/_js/index.js'
  },
  output: {
    path: __dirname,
    filename: './public/js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.sass|css$/,
        loaders: [
          "style",
          "css",
          "sass"
        ],
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.DefinePlugin({ 'PROD_ENV': true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
       compressor: { warnings: false }
    }),
    new webpack.NoErrorsPlugin()
  ],
  stats: { colors: true }
};
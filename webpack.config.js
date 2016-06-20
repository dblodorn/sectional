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
  }
};

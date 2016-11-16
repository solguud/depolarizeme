var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'compiled');
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  debug: true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        // Don't run node_modules or bower_components through babel loader
        excude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};

module.exports = config;

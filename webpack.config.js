var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 3000,
    proxy: {
      '/api/**': {
        target: 'http://localhost:4000',
        secure: false,
        changeOrigin: true,
      }
    },
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf|png)([\?]?.*)$/,
        loader: "file-loader"
      }
    ]
  }
};

module.exports = config;

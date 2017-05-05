const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {

  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/app.js'),
  ],

  devServer: {
    contentBase: 'src/www', // Relative directory for base of server
    devtool: 'eval',
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },
  
  devtool: 'eval',
  output: {
    path: buildPath, // Path of output file
    filename: 'app.js',
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
  ],
  module: {
    loaders: [
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file'
      },
      {
        test: /\.(js|jsx)$/,
        // test: /\.jsx?$/, // All .js files
        loaders: ['babel-loader'],
        exclude: [nodeModulesPath],
      },
    ],
  },
};

module.exports = config;

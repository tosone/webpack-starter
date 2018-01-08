const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: ['./main.jsx'],
  output: {
    path: path.join(__dirname, 'www'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: true,
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:3]',
              minimize: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'webpack-starter',
      template: '../index.html',
    }),
    new CleanWebpackPlugin('www'),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production') }),
  ],
};

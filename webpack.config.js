const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
// const DashboardPlugin = require("webpack-dashboard/plugin");
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    port: 3000,
    open: true,
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    overlay: true,
    proxy: {
      "/api": "http://localhost:8080"
    },
  },
  entry: path.resolve(__dirname, 'src', 'app', 'app.module.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        query: {
          presets: ['env'],
          plugins: ["angularjs-annotate"]
        }
      },
      {
        test: /\.css?$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: { loader: 'html-loader' }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'Warehouse',
      template: path.join(__dirname, 'src', 'app', 'index.template.html'),
      favicon: path.join(__dirname, 'src', 'assets', 'img', 'favicon.png')
    }),
    new HtmlWebpackPlugin({
      filename: 'login/index.html',
      title: 'Warehouse Login',
      inject: false,
      template: path.join(__dirname, 'src', 'login', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBar(),
    // new DashboardPlugin(),
    new WebpackNotifierPlugin()
  ]
};
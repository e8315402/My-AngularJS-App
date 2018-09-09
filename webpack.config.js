const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');
const glob = require('glob');

module.exports = {
  mode: 'development',
  entry: {
    modules: glob.sync("./client/src/**/*.module.js"),
    services: glob.sync("./client/src/**/*.service.js"),
    components: glob.sync("./client/src/**/*.component.js")
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /.js?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['env']
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
        path.resolve(__dirname, 'bower_components')
      ],
      use: { loader: 'html-loader' }
    }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Prop',
      template: path.join(__dirname, 'client', 'src', 'index.template.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    port: 3000,
    contentBase: path.join('./dist'),
    hot: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  }
};
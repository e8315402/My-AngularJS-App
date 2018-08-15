const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'app.js'),
    sideNav: path.join(__dirname, 'src', 'components', 'sideNav.component.js')
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
        presets: ['es2015']
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
      title: 'My AngularJS App',
      template: 'index.template.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join('./dist'),
    hot: true
  }
};
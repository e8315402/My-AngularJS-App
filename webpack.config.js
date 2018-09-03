const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');
const glob = require('glob');

module.exports = {
  mode: 'development',
  entry: {
    modules: glob.sync("./client/src/**/*.module.js").concat(['webpack-hot-middleware/client?reload=true&noInfo=true']),
    services: glob.sync("./client/src/**/*.service.js").concat(['webpack-hot-middleware/client?reload=true&noInfo=true']),
    components: glob.sync("./client/src/**/*.component.js").concat(['webpack-hot-middleware/client?reload=true&noInfo=true'])
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
      title: 'Prop',
      template: path.join(__dirname, 'client', 'src', 'index.template.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join('./dist'),
    hot: true
  }
};
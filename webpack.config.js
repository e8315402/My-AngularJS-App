const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');
const glob = require('glob');

module.exports = {
  mode: 'development',
  entry: {
    modules: glob.sync("./src/**/*.module.js"),
    services: glob.sync("./src/**/*.service.js"),
    directives: glob.sync('./src/**/*.directive.js'),
    components: glob.sync("./src/**/*.component.js")
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
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
          path.resolve(__dirname, 'bower_components')
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
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Prop',
      template: path.join(__dirname, 'src', 'index.template.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  // devtool: 'source-map',
  devServer: {
    port: 3000,
    contentBase: path.join('./dist'),
    hot: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  }
};
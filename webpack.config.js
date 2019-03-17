const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');
const glob = require('glob');

module.exports = {
  mode: 'development',
  entry: {
    modules: glob.sync("./src/app/**/*.module.js"),
    services: glob.sync("./src/app/**/*.service.js"),
    directives: glob.sync('./src/app/**/*.directive.js'),
    components: glob.sync("./src/app/**/*.component.js")
  },
  output: {
    filename: 'js/[name].js',
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
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'Warehouse',
      template: path.join(__dirname, 'src', 'app', 'index.template.html'),
      favicon: path.join(__dirname, 'src', 'asserts', 'img', 'favicon.png')
    }),
    new HtmlWebpackPlugin({
      filename: 'login/index.html',
      title: 'Warehouse Login',
      inject: false,
      template: path.join(__dirname, 'src', 'login', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
  watch: true,
  stats: 'minimal'
  // devServer: {
  //   port: 3000,
  //   open: true,
  //   contentBase: path.join(__dirname, 'public'),
  //   hot: true,
  //   noInfo: true,
  //   overlay: true,
  //   writeToDisk: true,
  //   proxy: {
  //     "/": "http://localhost:8080"
  //   },
  //   openPage: 'login.html'
  // }
};
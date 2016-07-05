// requires
const webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

// variables
const resolve = path.resolve,
  join = path.join,
  root = resolve(__dirname),
  src = join(root, 'src'),
  dist = join(root, 'dist');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: join(src, 'index.html'),
  filename: 'index.html',
  inject: 'body'
});

// main webpack config object, currently set up for dev
config = {
  devtool: 'source-map',
  resolve: {
    root: root,
    extensions: ['', '.js']
  },
  entry: [
    join(src, 'index')
  ],
  output: {
    path: dist,
    filename: 'bundle',
    publicPath: 'http://localhost:8080/'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.styl$/, include: src, loader: 'style-loader!css-loader!stylus-loader'}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};

module.exports = config;

const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
];

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src/app/app.js'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/static/',
    filename: 'app.bundle.js',
  },

  devtool: 'cheap-module-eval-source-map',
  bail: NODE_ENV === 'production' ? true : false,

  plugins,

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.json', '.js'],
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js'],
  },

  module: {
    loaders: [
      {
        include: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.js?$/,
        include: [
          path.join(__dirname, 'src')
        ],
        loader: 'babel-loader',
      },
    ],
  },
};

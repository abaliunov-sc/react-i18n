const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/client/demo/index.js',
  output: {
    publicPath: '/static/',
    path: path.resolve(__dirname, 'static'),
    filename: 'demo.bundle.js',
    library: 'demo',
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.json', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: 'raw-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'src')
        ],
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        }
      },
    ],
  },
};

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

  postcss: function () {
    return [require('autoprefixer')];
  },

  module: {
    loaders: [
      {
        include: /\.json$/,
        loader: 'json-loader'
      },
      {
        test   : /\.(png|jpg|jpeg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader'
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(css|less)$/,
        loader: `style!css?modules&importLoaders=1&` +
        `localIdentName=[name]__[local]__[hash:base64:3]` +
        `!postcss-loader!less?sourceMap`,
        include: /\.module\.(css|less)$/
      },
      {
        test: /\.(css|less)$/,
        loader: `style!css!postcss-loader!less?sourceMap`,
        exclude: /\.module\.(css|less)$/
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'src/client'),
          path.join(__dirname, 'server')
        ],
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ],
  },
};

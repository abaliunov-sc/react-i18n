'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const NODE_ENV = process.env.NODE_ENV || 'development';

let plugins = [
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify(NODE_ENV)
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin()
];

if (NODE_ENV == 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // don't show unreachable variables etc
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}

const common = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3001', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.resolve(__dirname, 'src/main.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
    library: 'app',
    libraryTarget: 'umd'
  },

  devtool: NODE_ENV == 'development' ? 'cheap-module-source-map' : null,

  plugins: plugins,

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.json', '.jsx', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        include: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'src')
        ],
        loaders: ['react-hot-loader', 'babel-loader']
      }
    ]
  }
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT || 3001
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
} else {
  module.exports = merge(common, {});
}

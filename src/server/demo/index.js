/* eslint-disable no-alert, no-console */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('../../../demo.webpack.config.js');

const app = express();
const compiler = webpack(config);

require('@opuscapita/react-showroom-server').makeLocalScan(path.resolve(__dirname, '../../client/components'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(express.static(__dirname + '/../../client/demo'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/demo/index.html'));
});

// launch application
const host = process.env.HOST ? process.env.HOST : 'localhost';
const port = process.env.PORT ? process.env.PORT : 3000;

app.listen(port, host, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`The server is running at http://${host}:${port}/`);
});

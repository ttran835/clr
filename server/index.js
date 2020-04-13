'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDev = require('../webpack.dev');
const webpackProd = require('../webpack.prod');

const app = express();
const db = require('../database');

const devServerEnabled = true;
const isDevelopment = true;

if (devServerEnabled) {
  let webpackConfig = webpackProd;
  // reload=true:Enable auto reloading when changing JS files or content
  // timeout=1000:Time from disconnecting from server to reconnecting
  if (isDevelopment) webpackConfig = webpackDev;

  webpackConfig.entry.unshift('webpack-hot-middleware/client?reload=true&timeout=1000');

  // Add HMR plugin
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  const compiler = webpack(webpackConfig);

  // Enable "webpack-dev-middleware"
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    }),
  );

  // Enable "webpack-hot-middleware"
  app.use(webpackHotMiddleware(compiler));
}

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https' || req.headers.host === 'localhost:3000') {
    return next();
  }
  res.redirect('https://' + req.hostname + req.url);
});

app.use(helmet());
app.use(
  helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  }),
);

app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=31557600, s-maxage=31557600');
  next();
});

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.use(express.static(__dirname + '/../client/dist'));

app.use('/api', router);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Port is ${port}`);
});

'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const router = require('./routes/routes');

const app = express();
const db = require('../database');

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/api', router);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

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

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Port is ${port}`);
});

var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

require('dotenv').load()

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(process.env.PORT, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:' + process.env.PORT + '/');
});
"use strict";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.get('/error', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'error.html'));
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(err, req, res, next) {
  console.error(err.message);
  console.error(err.stack);
  next(err);
});

app.use(function(err, req, res, next) {
  if (req.accepts('html')) {
    let message = encodeURIComponent(err.message);
    res.redirect('/error?message=' + message);
  } else {
    res.status(500).send({error: err.message});
  }
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.port;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
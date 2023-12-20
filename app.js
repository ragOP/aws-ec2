const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/hello', (req, res) => {
  res.send({ message: 'Hello, World!' });
});

module.exports.handler = serverless(app);

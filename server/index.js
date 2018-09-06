const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('../dist'));

app.post('/api/properties', function (req, res) {
  res.send('The message from back-end');
});

app.listen(8080, function () {
  console.log('The server is listening on 8080...');
});
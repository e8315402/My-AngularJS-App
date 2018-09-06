const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('../dist'));

app.post('/api/properties', function (req, res) {
  res.send(req.body);
});

app.get('/api/properties', function (req, res) {
  res.send([
    {'name': 'Property 1', 'price': 123},
    {'name': 'Property 2', 'price': 123}
  ]);
})

app.listen(8080, function () {
  console.log('The server is listening on 8080...');
});
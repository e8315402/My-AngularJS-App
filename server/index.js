import express from 'express';
import bodyParser from 'body-parser';

import neDB from './neDB';
import Property from './modal/Property';

const db = new neDB();

const app = express();

app.use(express.static('../dist'));
app.use(bodyParser.json());

app.post('/api/properties', function (req, res) {
  console.info("[POST] /api/properties: " + JSON.stringify(req.body));
  var p = new Property(db);
  p.insert(req.body, function (err) {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    }
    res.send(req.body);
  });
});

app.get('/api/properties', function (req, res) {
  console.info("[GET] /api/properties");
  var p = new Property(db);
  p.query({}, function (err, props) {
    if (err) {
      console.error(err);
      return res.status(err.status >= 100 && err.status < 600 ? err.code : 500).send(err);
    }
    return res.send(props);
  });
});

app.delete('/api/properties', function (req, res) {
  console.info("[DELETE] /api/properties");
  console.info(req.query);
  var p = new Property(db);
  p.remove(req.query, function (err, numRemoved) {
    if (err) {
      console.error(err);
      return res.status(err.status >= 100 && err.status < 600 ? err.code : 500).send(err);
    }
    return res.send(`${numRemoved}`);
  });
});

app.listen(8080, function () {
  console.log('The server is listening on 8080...');
});
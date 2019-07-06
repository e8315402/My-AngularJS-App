export default class PropertyApi {

  constructor(property) {
    this.property = property;
  }

  registerRoute(app) {
    app.route('/api/properties')
      .get(this.get.bind(this))
      .post(this.post.bind(this))
      .delete(this.delete.bind(this));
    app.route('/api/properties/:id').put(this.put.bind(this));
  }

  get(req, res) {
    this.property.query(req.query, function (err, props) {
      if (err) {
        console.error(err);
        return res.status(err.status >= 100 && err.status < 600 ? err.status : 500).send(err);
      }
      return res.send(props);
    });
  }

  post(req, res) {
    this.property.insert(req.body, function (err) {
      if (err) {
        console.error(err);
        res.status(400).send(err);
      }
      res.send(req.body);
    });
  }

  put(req, res) {
    this.property.edit({ _id: req.params['id'] }, req.body, function (err, numReplaced) {
      if (err) {
        console.error(err);
        res.status(400).send(err);
      }
      res.send({ found: numReplaced, data: req.body });
    });
  }

  delete(req, res) {
    this.property.remove(req.query, function (err, numRemoved) {
      if (err) {
        console.error(err);
        return res.status(err.status >= 100 && err.status < 600 ? err.status : 500).send(err);
      }
      return res.send(`${numRemoved}`);
    });
  }

};

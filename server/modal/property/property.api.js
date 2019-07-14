import PropertyNeDB from './property.dao';

const propertyStorage = new PropertyNeDB();

export default {
  registerRoute: (app) => {
    app.route('/api/properties')
      .get(get)
      .post(post)
      .delete(remove);
    app.route('/api/properties/:id')
      .put(put)
  }
}

const get = (req, res) => {
  propertyStorage.getProperties(req.query)
  .then((r) => res.status(200).send(r))
  .catch((error) => {
    console.error(error);
    return res.status(error.status >= 100 && error.status < 600 ? error.status : 500).send(error);
  });
}

const put = (req, res) => {
  propertyStorage.updateProperty(req.params['id'], req.body)
  .then((r) => res.status(200).send(r.toString()))
  .catch((error) => {
    console.error(error);
    return res.status(error.status >= 100 && error.status < 600 ? error.status : 500).send(error);
  });
}

const post = (req, res) => {
  propertyStorage.createProperty(req.body)
  .then((r) => res.status(200).send(r))
  .catch((error) => {
    console.error(error);
    return res.status(error.status >= 100 && error.status < 600 ? error.status : 500).send(error.message);
  });
}

const remove = (req, res) => {
  propertyStorage.deleteProperty(req.query)
  .then((r) => res.status(200).send(r.toString()))
  .catch((error) => {
    console.error(error);
    return res.status(error.status >= 100 && error.status < 600 ? error.status : 500).send(error);
  });
}
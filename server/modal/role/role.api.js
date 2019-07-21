
import RoleNeDB from './role.dao';

const roleStorage = new RoleNeDB();

export default {
  registerRoute: (app) => {
    app.route('/api/roles').get(get);
  }
}

const get = (req, res) => {
  roleStorage.getRoles()
  .then((r) => res.status(200).send(r))
  .catch((error) => {
    console.error(error);
    return res.status(error.status >= 100 && error.status < 600 ? error.status : 500).send(error);
  })
}
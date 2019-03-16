import { require as authRequire } from "../../authentication";
import { getPermission } from '../role';

export default class UserApi {
  constructor(user) {
    this.user = user;
  }

  registerRoute(app) {
    app.route('/api/users')
      .post(this.post.bind(this));

    app.route('/api/users/current')
      .get(this.get.bind(this));
  }

  post(req, res) {
    let newUser = req.body;
    newUser['permission'] = getPermission(newUser['role']);
    this.user.insert(newUser, function (err) {
      if (err) {
        console.error(err);
        return res.status(err.status >= 100 && err.status < 600 ? err.status : 500).send(err);
      }
      return res.send(req.body);
    })
  }

  get(req, res) {
    return res.send(req.user);
  }
};

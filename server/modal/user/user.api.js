import { require as authRequire } from "../../authentication";
import { getPermission } from '../role';

export default class UserApi {
  constructor(user) {
    this.user = user;
  }

  registerRoute(app) {
    app.route('/api/users')
      .post(this.post.bind(this))
      .get(this.get.bind(this));

    app.route('/api/users/current')
      .get(this.getCurrentUser.bind(this));
  }

  get(req, res) {
    this.user.query(req.query, function (err, users) {
      if (err) {
       console.error(err);
       return res.status(err.status >= 100 && err.status < 600 ? err.status : 500).send(err);
      }
      return res.send(users);
    })
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

  getCurrentUser(req, res) {
    return res.send(req.user);
  }
};

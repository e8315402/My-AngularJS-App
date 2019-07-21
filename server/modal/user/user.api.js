import UserNeDB from "./user.dao";

// import { require as authRequire } from "../../authentication";
// import { getPermission } from '../role';

const userStorage = new UserNeDB();

export default {
  registerRoute: (app) => {
    app.route('/api/users')
    .get(get)
    .post(post);
  }
}

const get = (req, res) => {
  userStorage.getUsers(req.query)
  .then((r) => res.status(200).send(r))
  .catch((error) => {
    console.error(error);
    return res.status(error.status >= 100 && error.status < 600 ? error.status : 500).send(error);
  })
}

const post = (req, res) => {
  userStorage.createUser(req.body)
  .then((r) => res.status(200).send(r))
  .catch((error) => {
    console.error(error);
    return res.status(error.status >= 100 && error.status < 600 ? error.status : 500).send(error);
  });
}

// export default class UserApi {
//   constructor(user) {
//     this.user = user;
//   }

//   registerRoute(app) {
//     app.route('/api/users')
//       .post(this.post.bind(this))
//       .get(this.get.bind(this));

//     app.route('/api/users/current')
//       .get(this.getCurrentUser.bind(this));
//   }

//   get(req, res) {
//     this.user.query(req.query, function (err, users) {
//       if (err) {
//        console.error(err);
//        return res.status(err.status >= 100 && err.status < 600 ? err.status : 500).send(err);
//       }
//       return res.send(users);
//     })
//   }

//   post(req, res) {
//     let newUser = req.body;
//     newUser['permission'] = getPermission(newUser['role']);
//     this.user.insert(newUser, function (err) {
//       if (err) {
//         console.error(err);
//         return res.status(err.status >= 100 && err.status < 600 ? err.status : 500).send(err);
//       }
//       return res.send(req.body);
//     })
//   }

//   getCurrentUser(req, res) {
//     return res.send(req.user);
//   }
// };

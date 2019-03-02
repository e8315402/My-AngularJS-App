export default class UserApi {
  constructor(user) {
    this.user = user;
  }

  registerRoute(app) {
    app.route('api/users')
      .get(this.get)
      .post(this.post);
  }

  post(req, res) {
    this.user.insert(req.body, function (err) {
      if (err) {
        console.error(err);
        return res.status(err.status >= 100 && err.status < 600 ? err.status : 500).send(err);
      }
      return res.send(req.body)
    })
  }

  get(req, res) {
    res.status(404).send('Not implement yet.');
  }
};

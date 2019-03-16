export default class RoleApi {

  constructor (roles) {
    this.roles = roles;
  }

  registerRoute(app) {
    app.route('/api/roles')
      .get(this.get.bind(this));
  }

  get(req, res) {
    res.send(this.roles.map(role => role.name));
  }
};

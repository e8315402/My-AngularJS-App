

export default class User {

  constructor (neDB) {
    this.neDB = neDB
  }

  insert(user, cb) {
    if (!user.username || !user.password) {
      var err = new Error('Unexpected user form. Username and password is necessary.');
      err.status = 400;
      return cb(err);
    }
    this.neDB.insert(user, cb);
  }

  query(predicate, cb) {
    this.neDB.find(predicate, { _id: 0 }, cb);
  }

}



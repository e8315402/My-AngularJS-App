import uuid from 'uuid/v1';

export default class User {

  constructor (db) {
    if (!db) throw Error('Required database object when initialing the model: "User".');
    this.db = db
  }

  insert(user, cb) {
    if (!user.username || !user.password) {
      var err = new Error('Unexpected user form. Username and password is necessary.');
      err.status = 400;
      return cb(err);
    }
    user.id = uuid();
    user._TABLE = 'USER';
    this.db.insert(user, cb);
  }

  findOne(predicate, cb) {
    this.db.findOne({ $and: [ { _TABLE: 'USER' } , predicate] }, { _id: 0 }, cb);
  }

  query(predicate, cb) {
    this.db.find({ $and: [ { _TABLE: 'USER' } , predicate] }, { _id: 0 }, cb);
  }

}
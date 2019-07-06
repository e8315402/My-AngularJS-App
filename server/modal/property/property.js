export default class Property {

  constructor(db) {
    if (!db) throw Error('Required database object when initialing the model: "Property".');
    this.db = db
  }

  insert(prop, cb) {
    prop._TABLE = 'PROPERTY';
    this.db.insert(prop, cb);
  }

  query(predicate, cb) {
    this.db.find({ $and: [ { _TABLE: 'PROPERTY' } , predicate] }, cb);
  }

  remove(predicate, cb) {
    this.db.remove({ $and: [ { _TABLE: 'PROPERTY' } , predicate] }, cb);
  }

  edit(predicate, update, cb) {
    update._TABLE = 'PROPERTY';
    this.db.update({ $and: [ { _TABLE: 'PROPERTY' } , predicate] }, update, {}, cb);
  }
};

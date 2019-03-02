export default class Property {

  constructor(db) {
    if (!db) throw Error('Required database object when initialing the model: "Property".');
    this.db = db
  }

  insert(prop, cb) {
    this.db.insert(prop, cb);
  }

  query(predicate, cb) {
    this.db.find(predicate, cb);
  }

  remove(predicate, cb) {
    this.db.remove(predicate, cb);
  }

  edit(predicate, update, cb) {
    this.db.update(predicate, update, {}, cb);
  }
};

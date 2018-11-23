
export default class Property {

  constructor(neDB) {
    this.neDB = neDB
  }

  insert(prop, cb) {
    this.neDB.insert(prop, cb);
  }

  query(predicate, cb) {
    this.neDB.find(predicate, { _id: 0 }, cb);
  }

  remove(predicate, cb) {
    this.neDB.remove(predicate, cb);
  }
};


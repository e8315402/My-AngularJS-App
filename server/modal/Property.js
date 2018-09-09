
export default class Property {

  constructor(neDB) {
    this.neDB = neDB
  }

  insert(prop, cb) {
    this.neDB.insert(prop, cb);
  }

  query(predicate, cb) {
    this.neDB.find(predicate, cb)
  }
};


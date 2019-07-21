import Datastore from 'nedb';

export default class NeDB {

  constructor (dbName) {
    var config = {
      filename: `./FakeData/${dbName}.db`,
      autoload: true
    }
    return new Datastore(config);
  }
};

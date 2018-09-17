import Datastore from 'nedb';

let instance = undefined;

export default class NeDB {

  constructor () {
    if (instance) return instance;
    var config = {
      filename: './FakeData/properties.db',
      autoload: true
    }
    instance = new Datastore(config);
    return instance;
  }
};

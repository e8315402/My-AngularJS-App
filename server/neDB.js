import Datastore from 'nedb';

let instance = undefined;

export default class NeDB {

  constructor () {
    if (instance) return instance;
    instance = new Datastore();
    return instance;
  }
};

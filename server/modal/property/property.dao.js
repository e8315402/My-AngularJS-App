import neDB from '../../neDB';
import Property from './property';

export default class PropertyNeDB {

  constructor() {
    this.db = new neDB('properties');
  }

  createProperty(propertyData) {
    return new Promise((resolve, reject) => {
      try {
        let newProperty = new Property(propertyData);
        this.db.insert(newProperty, (error, newProperty) => error ? reject(error) : resolve(newProperty));
      } catch (error) {
        return reject({
          status: error.status,
          message: error.message.join('\n')
        });
      }
    });
  }

  getProperties(predicate) {
    return new Promise((resolve, reject) => {
      this.db.find(predicate, (error, properties) => error ? reject(error) : resolve(properties));
    });
  }

  getProperty(id) {
    return new Promise((resolve, reject) => {
      this.db.findOne({ _id: id }, (error, property) => error ? reject(error) : resolve(property));
    });
  }

  updateProperty(id, newProperty) {
    return new Promise((resolve, reject) => {
      this.db.update({ _id: id }, newProperty, {}, (error, property) => error ? reject(error) : resolve(property));
    });
  }

  deleteProperty(predicate) {
    return new Promise((resolve, reject) => {
      this.db.remove(predicate, (error, numRemoved) => error ? reject(error) : resolve(numRemoved));
    });
  }
}
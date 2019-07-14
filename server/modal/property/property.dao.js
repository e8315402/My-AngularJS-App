import neDB from '../../neDB';
import Property from './property';
// class IPropertyDAO {
//   getProperties() {};
//   getProperty(id) {};
//   createProperty(number, makeAndModel, type, cost, presentValue, purchaseDate, ageLimit, custodian, user, location, placement, remarks) {};
//   deleteProperty(id) {}
// }

export default class PropertyNeDB {

  constructor() {
    this.db = new neDB();
  }

  createProperty(propertyData) {
    return new Promise((resolve, reject) => {
      try {
        let newProperty = new Property(propertyData);
        newProperty._TABLE = 'PROPERTY';
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
      this.db.find({ $and: [{ _TABLE: 'PROPERTY' } , predicate] }, (error, properties) => error ? reject(error) : resolve(properties));
    });
  }

  getProperty(id) {
    return new Promise((resolve, reject) => {
      this.db.findOne({ $and: [ { _TABLE: 'PROPERTY' } , { _id: id }] }, (error, property) => error ? reject(error) : resolve(property));
    });
  }

  updateProperty(id, newProperty) {
    return new Promise((resolve, reject) => {
      newProperty._TABLE = 'PROPERTY';
      this.db.update({ $and: [ { _TABLE: 'PROPERTY' } , { _id: id }] }, newProperty, {}, (error, property) => error ? reject(error) : resolve(property));
    });
  }

  deleteProperty(predicate) {
    return new Promise((resolve, reject) => {
      this.db.remove({ $and: [ { _TABLE: 'PROPERTY' } , predicate] }, (error, numRemoved) => error ? reject(error) : resolve(numRemoved));
    });
  }
}
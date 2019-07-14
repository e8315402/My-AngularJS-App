import { LackNecessaryArgumentError } from "../../constant/error";
import { isNull, isUndefined } from "../../utils/tools";

export default class Property {

  constructor({number, makeAndModel, type, cost, presentValue, purchaseDate, ageLimit, custodian, user, location, placement, remarks}) {
    requireDataChecker(number, makeAndModel, type, cost, presentValue, purchaseDate, ageLimit, custodian, user, location, placement, remarks);
    this.number = number;
    this.makeAndModel = makeAndModel;
    this.type = type;
    this.cost = cost;
    this.presentValue = presentValue;
    this.purchaseDate = purchaseDate;
    this.ageLimit = ageLimit;
    this.custodian = custodian;
    this.user = user;
    this.location = location;
    this.placement = placement;
    this.remarks = remarks;
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

const requireDataChecker = (number, makeAndModel, type, cost, presentValue, purchaseDate, ageLimit, custodian, user, location, placement, remarks) => {
  let lackNecessaryAttributes = [];
  if (isNull(number) || isUndefined(number)) lackNecessaryAttributes.push('Number is required.')
  if (isNull(makeAndModel) || isUndefined(makeAndModel)) lackNecessaryAttributes.push('Make / model is required.');
  if (isNull(type) || isUndefined(type)) lackNecessaryAttributes.push('Type is required.');
  if (isNull(cost) || isUndefined(cost)) lackNecessaryAttributes.push('Cost is required.');
  if (isNull(purchaseDate) || isUndefined(purchaseDate)) lackNecessaryAttributes.push('Purchase date is required.');
  if (isNull(custodian) || isUndefined(custodian)) lackNecessaryAttributes.push('Custodian is required.');
  if (isNull(location) || isUndefined(location)) lackNecessaryAttributes.push('Location is required.');
  if (lackNecessaryAttributes.length) throw new LackNecessaryArgumentError(lackNecessaryAttributes);
}

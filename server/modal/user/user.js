import { LackNecessaryArgumentError } from "../../constant/error";
import { isNull, isUndefined } from "../../utils/tools";
import { RoleFactory } from '../role';
// import uuid from 'uuid/v1';

export default class User {

  constructor ({username, password, role}) {
    requiredDataChecker(username, password, role);
    this.username = username;
    this.password = password;
    this.role = RoleFactory(role);
  }

  // insert(user, cb) {
  //   if (!user.username || !user.password) {
  //     var err = new Error('Unexpected user form. Username and password is necessary.');
  //     err.status = 400;
  //     return cb(err);
  //   }
  //   user.id = uuid();
  //   user._TABLE = 'USER';
  //   this.db.insert(user, cb);
  // }

  // findOne(predicate, cb) {
  //   this.db.findOne({ $and: [ { _TABLE: 'USER' } , predicate] }, { _id: 0 }, cb);
  // }

  // query(predicate, cb) {
  //   this.db.find({ $and: [ { _TABLE: 'USER' } , predicate] }, { _id: 0 }, cb);
  // }

}

const requiredDataChecker = (username, password, role) => {
  let lackNecessaryAttributes = [];
  if (isNull(username) || isUndefined(username)) lackNecessaryAttributes.push('User name is required.');
  if (isNull(password) || isUndefined(password)) lackNecessaryAttributes.push('Password name is required.');
  if (isNull(role) || isUndefined(role)) lackNecessaryAttributes.push('Role is required.');
  if (lackNecessaryAttributes.length) throw new LackNecessaryArgumentError(lackNecessaryAttributes);
}
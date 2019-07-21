
import neDB from '../../neDB';
import User from './user';

export default class UserNeDB {
  
  constructor() {
    this.db = new neDB('users');
  }

  createUser(userData) {
    return new Promise((resolve, reject) => {
      try {
        let newUser = new User(userData);
        this.db.insert(newUser, (error, newUser) => error ? reject(error) : resolve(newUser));
      } catch (error) {
        console.error(error);
        return reject({
          status: error.status,
          message: error.message.join('\n')
        });
      }
    });
  }

  getUsers(predicate) {
    return new Promise((resolve, reject) => {
      this.db.find(predicate, (error, users) => error ? reject(error) : resolve(users));
    });
  }
 
};

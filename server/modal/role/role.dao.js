import neDB from '../../neDB';
import Administrator from './administrator';
import Student from './student';

export default class RoleNeDB {
  
  constructor() {
    this.db = new neDB('roles')
  }

  getRoles() {
    const administrator = new Administrator();
    const student = new Student();
    const roles = [];
    roles.push(administrator.name);
    roles.push(student.name);
    return Promise.resolve(roles);
  }

};

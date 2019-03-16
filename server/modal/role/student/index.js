import IRole from "../role";

export default class Student extends IRole {

  constructor() {
    super('Student');
  }

  permission() {
    return [
      {
        object: 'PROPERTY',
        actions: ['VIEW']
      },
      {
        object: 'USER',
        actions: ['VIEW']
      }
    ];
  }
};

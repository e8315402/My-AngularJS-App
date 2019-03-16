import IRole from '../role';

export default class Administrator extends IRole {

  constructor() {
    super('Administrator');
  }

  permission() {
    return [
      {
        object: 'PROPERTY',
        actions: ['CREATE', 'VIEW', 'EDIT', 'DELETE']
      },
      {
        object: 'USER',
        actions: ['CREATE', 'VIEW', 'EDIT', 'DELETE']
      }
    ];
  }
};

export default class IRole {
  constructor(name) {
    this.name = name;
  }

  permission() {
    throw Error('Need to implement the "permission" method when extend the Role.')
  }
};

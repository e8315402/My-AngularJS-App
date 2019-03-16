import Administrator from './administrator';
import Student from './student';
import { default as roleApi } from './role.api';

let administrator = undefined;
let student = undefined;

export default {
  init: () => {
    administrator = new Administrator();
    student = new Student();
    return new roleApi([administrator, student]);
  }
}

export const getPermission = (roleType) => {
  switch (roleType) {
    case 'Administrator':
      return administrator.permission();
      break;
    case 'Student':
      return student.permission();
      break;
    default:
      throw Error(`Unknown role type: ${roleType}`);
      break;
  }
};

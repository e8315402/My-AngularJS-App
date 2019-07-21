import { UnknownParameterError } from "../../constant/error";
import Administrator from './administrator';
import Student from './student';

export default (role) => {
  switch (role) {
    case 'Administrator':
      return new Administrator();
    case 'Student':
      return new Student();
    default:
      throw new UnknownParameterError(`Unknown role: "${role}"`);
  }
};
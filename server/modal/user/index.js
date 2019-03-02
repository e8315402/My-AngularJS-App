import { default as userApi } from './user.api';
import User from './user';

let user = undefined;

export default {
  init: db => {
    user = new User(db);
    return new userApi(user);
  }
}

export const getInstance = () => user;
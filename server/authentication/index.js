import { getInstance as user } from '../modal/user';

export const require = (req, res, next) => {
  if (!req.isAuthenticated()) res.redirect(401, '/login');
  else next();
};


export default {
  passwordSimpleCheck: (username, password, done) => {
    user().findOne({ username: username }, function (err, foundUser) {
      if (err) {
        done(err);
      }
      if (!foundUser) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (foundUser.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, foundUser);
    });
  },
  require: (req, res, next) => {
    if (!req.isAuthenticated()) res.redirect(401, '/login');
    else next();
  },
  sessionSerialization: (foundUser, done) => {
    done(null, foundUser.id);
  },
  sessionDeserialization: (id, done) => {
    user().findOne({ id: id }, done);
  }
};
import path from 'path';
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import passport from 'passport';
import flash from 'connect-flash';
import { Strategy as LocalStrategy } from 'passport-local';

import neDB from './neDB';
import { default as propertyApiRoute } from './modal/property';
import { default as userApiRoute, getInstance as user } from './modal/user';
// import { toQueryString, isEmpty } from './utils/tools';
import logger from './utils/logger';
import auth from './authentication'

const db = new neDB();

const app = express();

app.use('/js', express.static('public/js'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'work hard', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(logger);

propertyApiRoute.init(db).registerRoute(app);
userApiRoute.init(db).registerRoute(app);

passport.use(new LocalStrategy(function (username, password, done) {
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
}));

passport.serializeUser(function (foundUser, done) {
  done(null, foundUser.id);
});

passport.deserializeUser(function (id, done) {
  user().findOne({ id: id }, done);
});

app.get('/', auth, function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'login', 'index.html'));
});


app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/login');
});

app.listen(3000, function () {
  console.info('The server is listening on 3000...');
});
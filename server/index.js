import path from 'path';
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import passport from 'passport';
import flash from 'connect-flash';
import { Strategy as LocalStrategy } from 'passport-local';

import property from './modal/property';
import user from './modal/user';
import role from './modal/role';
import logger from './utils/logger';
import auth from './authentication';

const app = express();

app.use(logger);
app.use('/js', express.static('public/js'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'work hard', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.use(new LocalStrategy(auth.passwordSimpleCheck));
passport.serializeUser(auth.sessionSerialization);
passport.deserializeUser(auth.sessionDeserialization);

property.registerRoute(app);
user.registerRoute(app);
role.registerRoute(app);

app.get('/', auth.require, function (req, res) {
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

app.listen(8080, function () {
  console.info('The server is listening on 8080...');
});
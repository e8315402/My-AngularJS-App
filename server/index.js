import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import Strategy from 'passport-local';

import neDB from './neDB';
import Property from './modal/Property';
import User from './modal/User';
import { toQueryString, isEmpty } from './Utils';

const localStrategy = Strategy;

const db = new neDB();
const property = new Property(db);
const user = new User(db);

const app = express();

app.use(express.static('../dist'));
app.use(bodyParser.json());
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(function (username, password, done) {
  user.query({username: username}, function (err, user) {
    if (err) done(err);
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}));

app.post('/api/properties', function (req, res) {
  console.info("[POST] /api/properties: " + JSON.stringify(req.body));
  property.insert(req.body, function (err) {
    if (err) {
      console.error(err);
      res.status(400).send(err);
    }
    res.send(req.body);
  });
});

app.get('/api/properties', function (req, res) {
  console.info("[GET] /api/properties" + (!isEmpty(req.query) ? toQueryString(req.query) : ''));
  property.query(req.query, function (err, props) {
    if (err) {
      console.error(err);
      return res.status(err.status >= 100 && err.status < 600 ? err.status : 500).send(err);
    }
    return res.send(props);
  });
});

app.delete('/api/properties', function (req, res) {
  console.info("[DELETE] /api/properties");
  console.info(req.query);
  property.remove(req.query, function (err, numRemoved) {
    if (err) {
      console.error(err);
      return res.status(err.status >= 100 && err.status < 600 ? err.status : 500).send(err);
    }
    return res.send(`${numRemoved}`);
  });
});

app.post('/api/users', function (req, res) {
  console.info("[POST] /api/users: " + JSON.stringify(req.body));
  user.insert(req.body, function (err) {
    if (err) {
      console.error(err);
      return res.status(err.status >= 100 && err.status < 600 ? err.status : 500).send(err);
    }
    return res.send(req.body)
  })
})

app.post('/login', 
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

app.listen(8080, function () {
  console.log('The server is listening on 8080...');
});
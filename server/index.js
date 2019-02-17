import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import neDB from './neDB';
import Property from './modal/Property';
import User from './modal/User';
import { toQueryString, isEmpty } from './Utils';

const db = new neDB();
const property = new Property(db);
const user = new User(db);

const app = express();

app.use(bodyParser.json());
app.use(session({ secret: 'work hard', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(function (username, password, done) {
  user.findOne({username: username}, function (err, foundUser) {
    console.log('foundUser :', foundUser);
    if (err) {
      console.info('Authentication failed.');
      console.info(err);
      done(err);
    }
    if (!foundUser) {
      console.info('User not found.');
      return done(null, false);
    }
    if (foundUser.password !== password) {
      console.info('Password is not correct.');
      return done(null, false);
    }
    console.info('Authentication passed.');
    return done(null, foundUser);
  });
}));

passport.serializeUser(function(foundUser, done) {
  console.log('serializeUser - foundUser :', foundUser);
  done(null, foundUser.id);
});

passport.deserializeUser(function(id, done) {
  user.findOne({id: id}, function(err, foundUser) {
    console.log('deserializeUser - err :', err);
    console.log('deserializeUser - foundUser :', foundUser);
    done(err, foundUser);
  });
});

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

app.get('/login', function (req, res) {
  console.info("[GET] /login");
  res.redirect('login.html');
});

app.post('/login', 
  bodyParser.urlencoded({ extended: false }),
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' })
);

app.listen(8080, function () {
  console.log('The server is listening on 8080...');
});
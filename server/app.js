const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').Strategy;
const cors = require('cors');

const db = require('./db');
const characterRouter = require('./routes/character-routes');
const authRouter = require('./routes/auth-routes');

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(
  session({
    secret: 'cowboy coder',
    resave: true,
    saveUninitialized: false,
    cookies: { secure: false }, // needs https
  })
);
app.use(passport.initialize());
app.use(passport.session());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', authRouter);
app.use('/api', characterRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

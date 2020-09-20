require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const passport = require('./auth/passport');
const cors = require('cors');

const dbConnection = require('./db');
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
    store: new MongoStore({ mongooseConnection: dbConnection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

dbConnection.on(
  'error',
  console.error.bind(console, 'MongoDB connection error:')
);

app.use('/api', authRouter);
app.use('/api', characterRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

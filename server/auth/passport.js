const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/api/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile); //profile contains all the personal data returned
      done(null, profile);
    }
  )
);

passport.serializeUser(function (user, callback) {
  console.log('serializing user.');
  callback(null, user.id);
});

passport.deserializeUser(function (user, callback) {
  console.log('deserialize user.');
  callback(null, user.id);
});

module.exports = passport;

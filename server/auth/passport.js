const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      consumerKey: GOOGLE_CONSUMER_KEY,
      consumerSecret: GOOGLE_CONSUMER_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (token, tokenSecret, profile, done) {
      return done(err, { userProfile: profile });
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return done(err, user);
      // });
    }
  )
);

module.exports = passport;

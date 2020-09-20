const passport = require('../auth/passport');

const googleAuthenticate = (req, res) => {
  passport.authenticate('google', {
    scope:
      'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
  });
};

module.exports = {
  googleAuthenticate,
};

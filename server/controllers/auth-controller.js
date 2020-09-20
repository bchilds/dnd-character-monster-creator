const passport = require('../auth/passport');

const googleAuthenticate = (req, res) => {
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login'],
  });
};

module.exports = {
  googleAuthenticate,
};

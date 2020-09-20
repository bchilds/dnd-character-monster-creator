const express = require('express');
const passport = require('../auth/passport');
const AuthController = require('../controllers/auth-controller');

const router = express.Router();

router.get('/auth/google', AuthController.googleAuthenticate);
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/')
);

module.exports = router;

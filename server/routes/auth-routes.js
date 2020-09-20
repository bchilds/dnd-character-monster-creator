const express = require('express');
const passport = require('../auth/passport');
const AuthController = require('../controllers/auth-controller');

const router = express.Router();

router.get(
  '/auth/google',
  () => {
    console.log('authing');
  },
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);
router.get(
  '/auth/google/callback',
  () => {
    console.log('callback received');
  },
  passport.authenticate('google', {
    successRedirect: '/characters',
    failureRedirect: '/login',
  })
);

module.exports = router;

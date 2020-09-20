const express = require('express');

const AuthController = require('../controllers/auth-controller');

const router = express.Router();

router.get('/auth/google', AuthController.googleAuthenticate);
router.get('/auth/google/callback', AuthController.googleAuthenticateCallback);

module.exports = router;

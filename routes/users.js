const express = require('express');
const router = express.Router();
const passport = require('passport');

const user_Controller = require('../controller/users_controller');
router.get('/sign-in', user_Controller.signIn);
router.get('/profile', user_Controller.profile);
router.post('/create-account', user_Controller.create_account);
//use passport to auth
router.post('/login',
    passport.authenticate(
        'local', { failureRedirect: '/users/sign-in' }
    ), user_Controller.login);


module.exports = router;
const express = require('express');
const router = express.Router();

const user_Controller = require('../controller/users_controller');
router.get('/sign-in', user_Controller.signIn);
router.get('/profile', user_Controller.profile);
router.post('/create-account', user_Controller.create_account);
router.post('/login', user_Controller.login);


module.exports = router;
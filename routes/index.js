const express = require('express');
const router = express.Router();

const home_Controller = require('../controller/home_Controller');
//Routes to different URL's

router.get('/', home_Controller.home);
router.use('/users', require('./users'));

//export
module.exports = router;
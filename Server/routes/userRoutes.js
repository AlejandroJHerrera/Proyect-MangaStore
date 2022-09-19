const express = require('express'),
  router = express.Router(),
  userController = require('../controllers/userController');

//This route is for getting all manga inside DB//

router.get('/', userController.findAll);

//This route is for adding singular manga inside DB//

router.post('/new', userController.addUser);

module.exports = router;

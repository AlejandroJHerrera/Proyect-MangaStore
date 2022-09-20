const express = require('express'),
  router = express.Router(),
  userController = require('../controllers/userController');

//This route is for getting all manga inside DB//

router.get('/', userController.findAll);

//This route is for adding singular manga inside DB//

router.post('/new', userController.addUser);

//This route is used to delete users by ID //

router.post('/delete', userController.delUser);

//This route is used to update users//

router.post('/update', userController.updateUser);

//This route is used to search for users by name //
router.get('/:name', userController.searchUser);

module.exports = router;

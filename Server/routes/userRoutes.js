const express = require('express'),
  router = express.Router(),
  userController = require('../controllers/userController');

//This route is for getting all manga inside DB//

router.get('/all', userController.findAll);

//This route is for adding singular manga inside DB//

router.post('/new', userController.register);

//This route is used for login in//

router.post('/login', userController.login);

//This route is used to verify the token//

router.post('/verify_token', userController.verify_token);

//This route is used to delete users by ID //

router.post('/delete', userController.delUser);

//This route is used to update users//

router.post('/update', userController.updateUser);

//This route is used to search for users by email //
router.get('/:email', userController.searchUser);

module.exports = router;

const express = require('express'),
  router = express.Router(),
  categoryController = require('../controllers/categoryController');

//This route is for getting all categorys available in DB//

router.get('/', categoryController.findAll);

//This route is for adding the categorys//

router.post('/add', categoryController.addCate);

module.exports = router;

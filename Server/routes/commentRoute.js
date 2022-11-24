const express = require('express'),
  router = express.Router(),
  commentController = require('../controllers/commentController');

//This route is to add comments in a manga

router.post('/:id/addComment', commentController.addComment);

module.exports = router;

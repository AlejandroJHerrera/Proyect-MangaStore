const express = require('express'),
  router = express.Router(),
  commentController = require('../controllers/commentController');

//This route is to add comments in a manga

router.post('/:id/addComment', commentController.addComment);

//This route is to view all the comments left on a manga
router.get('/:id/getComment', commentController.getComment);

module.exports = router;

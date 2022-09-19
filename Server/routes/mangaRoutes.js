const express = require('express'),
  router = express.Router(),
  mangaController = require('../controllers/mangaController');

//This route is for getting all manga inside DB//

router.get('/', mangaController.findAll);

//This route is for adding singular manga inside DB//

router.post('/new', mangaController.addManga);

//This route is used to update manga//

router.post('/update', mangaController.updateManga);

//This route is used to delete manga by passing ID//

router.post('/delete', mangaController.deleteManga);

//This route is used to search by the title manga//

router.get('/:slug', mangaController.searchManga);

module.exports = router;

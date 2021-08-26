const router = require('express').Router();
const infosController = require('../controllers/infos.controller');



router.get('/admin', infosController.gainAdmin);
router.get('/agence/:id', infosController.gainAgence);
router.get('/branche/:id', infosController.gainBranche);

module.exports =  router ;
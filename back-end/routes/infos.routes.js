const router = require('express').Router();
const infosController = require('../controllers/infos.controller');



router.get('/', infosController.gain);

module.exports =  router ;
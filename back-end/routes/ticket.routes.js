const router = require('express').Router();
const ticketController = require('../controllers/ticket.controller');


router.get('/print', ticketController.print);

module.exports = router;
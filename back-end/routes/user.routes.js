const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
//routes création des agences et branches
router.post("/registerAgence", authController.signUpAgence);
router.post("/registerBranche/:id", authController.signUpBranche);

//routes de recupération des utilisateurs

router.get('/', userController.getAllUser);
router.get("/all", authController.getAll);

module.exports = router;
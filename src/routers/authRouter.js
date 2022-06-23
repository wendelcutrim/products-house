const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.get("/login", AuthController.showLogin);
router.post("/login", AuthController.login);
router.get("/cadastrar", AuthController.showCadastrar);
router.post("/cadastrar", AuthController.store);
router.get("/logout", AuthController.logout);

module.exports = router;
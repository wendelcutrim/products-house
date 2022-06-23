const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/HomeController");
const isLogin = require('../middlewares/isLogin');

router.get("/", HomeController.showIndex);
router.get("/produtos/:id", HomeController.showOneProduct);


module.exports = router;
const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/HomeController");

router.get("/", HomeController.showIndex);
router.get("/produtos/:id", HomeController.showOneProduct);

module.exports = router;
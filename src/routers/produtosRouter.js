const express = require('express');
const router = express.Router();
const ProdutosController = require("../controllers/ProdutosController");

router.get("/", ProdutosController.showAllProducts);
router.get("/cadastro", ProdutosController.showCreatePage);
router.post("/cadastro", ProdutosController.store);

module.exports = router;
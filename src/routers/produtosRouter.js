const express = require('express');
const router = express.Router();
const ProdutosController = require("../controllers/ProdutosController");

router.get("/", ProdutosController.showAllProducts);
router.get("/cadastro", ProdutosController.showCreatePage);
router.post("/cadastro", ProdutosController.store);
router.get("/:id", ProdutosController.showOneProduct);
router.get("/:id/editar", ProdutosController.showEditProduct);
router.put("/:id/editar", ProdutosController.edit);
router.delete("/:id", ProdutosController.delete);

module.exports = router;
const express = require('express');
const router = express.Router();
const ProdutosController = require("../controllers/ProdutosController");

router.get("/", ProdutosController.showAllProducts);
router.get("/cadastro", ProdutosController.showCreatePage);
router.post("/cadastro", ProdutosController.store);
router.get("/:id/editar", ProdutosController.showEditProduct);
router.put("/:id/editar", ProdutosController.editProduct);
router.get("/:id", ProdutosController.showOneProduct);
router.delete("/:id", ProdutosController.deleteProduct);

module.exports = router;
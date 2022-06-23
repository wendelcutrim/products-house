const express = require('express');
const router = express.Router();
const ProdutosController = require("../controllers/ProdutosController");
const isLogin = require('../middlewares/isLogin');
const isAdmin = require('../middlewares/isAdmin');
const upload = require("../middlewares/upload");

router.use(isLogin);
router.use(isAdmin);
router.get("/", ProdutosController.showAllProducts);
router.get("/cadastro", ProdutosController.showCreatePage);
router.post("/cadastro", upload.single("imagem"), ProdutosController.store);
router.get("/:id/editar", ProdutosController.showEditProduct);
router.put("/:id/editar", upload.single("imagem"), ProdutosController.editProduct);
router.get("/:id", ProdutosController.showOneProduct);
router.delete("/:id", ProdutosController.deleteProduct);

module.exports = router;
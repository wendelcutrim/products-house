const express = require('express');
const router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController');
const isLogin = require("../middlewares/isLogin");

router.use(isLogin);
router.get("/carrinho", CarrinhoController.showCart);
router.post("/carrinho/adicionar", CarrinhoController.addCart);
router.delete("/carrinho/:id/remover", CarrinhoController.deleteProduct);


module.exports = router;
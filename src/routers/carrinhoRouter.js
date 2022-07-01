const express = require('express');
const router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController');

router.get('/carrinho', CarrinhoController.showCart);
module.exports = router;
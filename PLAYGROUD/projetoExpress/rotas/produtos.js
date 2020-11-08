const express = require('express');
const ProdutoController = require('. ./controllers/ProdutoControlers');

const router = express.Router();

router.get('/criar', ProdutoController.criarProduto);
router.get('/deleta/:id', ProdutoController.deletarProduto);
;

module.exports = router;

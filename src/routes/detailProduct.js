var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

/* Detalle del producto */
router.get('/', function(req, res, next) {
  productController.detail(req, res);
});

/* GET home page. */
router.get('/listProducts', function(req, res, next) {
  productController.list(req, res);
});

// Crear producto
router.get('/create', productController.createForm);
router.post('/', productController.create);

// Editar producto
router.get('/:id/edit', productController.editForm);
router.put('/:id', productController.update);

// Eliminar producto
router.delete('/:id', productController.delete);

module.exports = router;

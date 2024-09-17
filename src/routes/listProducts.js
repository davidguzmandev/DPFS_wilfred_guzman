var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

/* GET home page. */
router.get('/', function(req, res, next) {
  productController.list(req, res);
});

// Detalle de producto
router.get('/:id', function(req, res, next) {
  productController.detail(req, res);
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

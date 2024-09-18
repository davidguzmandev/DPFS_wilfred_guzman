var express = require('express');
var router = express.Router();
var multer = require('multer');
const upload = require('../config/multerConfig');
const productController = require('../controllers/productController');

/* GET home page. */
router.get('/', function(req, res, next) {
  productController.list(req, res);
});

// Crear producto
router.get('/createProduct', productController.createForm);
router.post('/', productController.create);

// Detalle de producto
router.get('/:id', function(req, res, next) {
  productController.detail(req, res);
});


// Editar producto
router.get('/:id/editProduct', productController.editForm);
router.put('/:id', upload.single('image'), productController.update);


// Eliminar producto
router.delete('/:id', productController.delete);

module.exports = router;

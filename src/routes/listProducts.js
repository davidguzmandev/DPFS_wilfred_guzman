var express = require('express');
var router = express.Router();
var multer = require('multer');
const upload = require('../config/multerConfig');
const productController = require('../controllers/productController');

// Configuración de multer para esta ruta específica


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
router.get('/:id/editProduct', productController.editForm);
router.put('/:id', upload.single('image'), productController.update);

router.put('/:id', productController.update);

// Eliminar producto
router.delete('/:id', productController.delete);

module.exports = router;

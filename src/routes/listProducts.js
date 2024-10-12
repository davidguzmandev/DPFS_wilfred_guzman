var express = require('express');
var router = express.Router();
var multer = require('multer');
const upload = require('../config/multerConfig');
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/auth');

/* GET home page. */
router.get('/', authMiddleware.isAuthenticated, function(req, res, next) {
  productController.list(req, res);
});

// Crear producto
router.get('/createProduct', authMiddleware.isAuthenticated, productController.createForm);
router.post('/', productController.create);

// Detalle de producto
router.get('/:id', authMiddleware.isAuthenticated, function(req, res, next) {
  productController.detail(req, res);
});

// Editar producto
router.get('/:id/editProduct', authMiddleware.isAuthenticated, productController.editForm);
router.put('/:id', upload.single('image'), productController.update);

// Eliminar producto
router.delete('/:id', authMiddleware.isAuthenticated, productController.delete);

module.exports = router;

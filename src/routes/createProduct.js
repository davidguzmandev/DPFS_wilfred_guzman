var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('createProduct', { title: 'Crear Producto'});
});

module.exports = router;

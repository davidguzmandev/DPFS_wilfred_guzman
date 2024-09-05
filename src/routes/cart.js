var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('productCart', { title: 'Carrito de Compras'});
});

module.exports = router;

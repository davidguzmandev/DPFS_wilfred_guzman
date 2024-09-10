var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('listProducts', { title: 'Listado de Productos'});
});

module.exports = router;

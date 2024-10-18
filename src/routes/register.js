var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../config/multerConfig');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Crear Cuenta'});
});

router.post('/', upload.single('image'), userController.register);

module.exports = router;

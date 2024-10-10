const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Mostrar formulario de login
router.get('/login', userController.loginForm);

// Procesar login
router.post('/login', userController.login);

// Cerrar sesión
router.get('/logout', userController.logout);

module.exports = router;
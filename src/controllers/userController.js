const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../../data/users.json');

// Helper function to read JSON file
const getUsers = () => {
    try {
        const data = fs.readFileSync(usersFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer el archivo de usuarios:', error);
        return [];
    }
};

const userController = {
    // Mostrar el formulario de login
    loginForm: (req, res) => {
        res.render('login', {error: null});
    },

    // Autenticar usuario
    login: (req, res) => {
        const { email, password } = req.body;
        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Autenticación exitosa
            req.session.user = { id: user.id, email: user.email };
            res.redirect('/listProducts');
            console.log('sesion iniciada');
        } else {
            // Autenticación fallida
            res.render('login', { error: 'Correo electrónico o contraseña incorrectos' });
        }
    },

    // Cerrar sesión
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/login');
    }
};

module.exports = userController;
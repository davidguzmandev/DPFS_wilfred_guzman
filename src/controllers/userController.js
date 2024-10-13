const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt'); // Para encriptar la contraseña
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

const saveUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

const userController = {

    registerForm: (req, res) => {
        res.render('register'); // Renderiza el formulario de registro (register.ejs)
    },

    register: (req, res) => {
        const { username, email, password } = req.body;
        const users = getUsers();

        // Verificar si el email ya está registrado
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            return res.render('register', { error: 'El email ya está registrado' });
        }

        // Encriptar la contraseña
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Crear el nuevo usuario
        const newUser = {
            id: users.length + 1,
            username,
            email,
            password: hashedPassword
        };

        // Agregar el nuevo usuario a la lista
        users.push(newUser);

        // Guardar la lista actualizada en el archivo JSON
        saveUsers(users);

        // Redirigir al login o a otra página de tu elección
        res.redirect('/login');
    },

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
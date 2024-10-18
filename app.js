const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const multer = require('multer');
const upload = require('./src/config/multerConfig');
const session = require('express-session');


const indexRouter = require('./src/routes/index');
const productsRouter = require('./src/routes/products');
const productDetailRouter = require('./src/routes/productDetail');
const cartRouter = require('./src/routes/cart');
const userRoutes = require('./src/routes/user');
const registerRouter = require('./src/routes/register');
const listProductsRouter = require('./src/routes/listProducts');

const app = express();

// Middleware para analizar datos de formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de method-override (PUT)
app.use(methodOverride('_method'));

// Configura la carpeta 'public' para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
// Usar el middleware en tus rutas
app.use('/images', express.static(path.join(__dirname, 'public/images')));

//User
// Configurar express-session
app.use(session({
    secret: 'tu_secreto_aqui',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Cambiar a true si estás usando HTTPS
}));

// view engine setup
// Configura EJS como el motor de vistas
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// Especifica la carpeta donde están las vistas
app.set('views', './src/views');

// Rutas Frontend
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/productDetail', productDetailRouter);
app.use('/productCart', cartRouter);
app.use('/register', registerRouter);
app.use(userRoutes);

// Rutas Backend
app.use('/listProducts', listProductsRouter);


//Server
app.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
});

module.exports = app;
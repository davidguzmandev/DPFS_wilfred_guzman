const express = require('express');
const path = require('path');

const indexRouter = require('./src/routes/index');
const productsRouter = require('./src/routes/products');
const productDetailRouter = require('./src/routes/productDetail');
const cartRouter = require('./src/routes/cart');
const loginRouter = require('./src/routes/login');
const registerRouter = require('./src/routes/register');
const createProductRouter = require('./src/routes/createProduct');
const listProductsRouter = require('./src/routes/listProducts');
const detailProductRouter = require('./src/routes/detailProduct');

const app = express();

// Configura la carpeta 'public' para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

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
app.use('/login', loginRouter);
app.use('/register', registerRouter);

// Rutas Backend
app.use('/createProduct', createProductRouter);
app.use('/listProducts', listProductsRouter);
app.use('/detailProduct', detailProductRouter);



//Server
app.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
});

module.exports = app;
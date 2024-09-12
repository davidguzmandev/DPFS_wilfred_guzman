const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');

// Helper function to read JSON file
const getProducts = () => {
    const data = fs.readFileSync(productsFilePath, 'utf-8');
    return JSON.parse(data);
};

// Helper function to write JSON file
const saveProducts = (products) => {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
};

const productController = {
    // Listado de productos
    list: (req, res) => {
        const products = getProducts();
        res.render('listProducts', { products });
    },

    // Mostrar formulario de creación
    createForm: (req, res) => {
        res.render('/createProduct');
    },

    // Crear un producto
    create: (req, res) => {
        const products = getProducts();
        const newProduct = {
            id: products.length ? products[products.length - 1].id + 1 : 1,
            name_product: req.body.name_product,
            price: req.body.price,
            description: req.body.description,
            category_product: req.body.category_product,
            size: req.body.size.split(','),
            color: req.body.color.split(','),
            image: req.body.image
        };
        products.push(newProduct);
        saveProducts(products);
        console.log('Producto Creado');
        res.redirect('/products');
    },

    // Mostrar detalle de un producto
    detail: (req, res) => {
        const products = getProducts();
        const product = products.find(p => p.id == req.params.id);
        res.render('products/detail', { product });
    },

    // Mostrar formulario de edición
    editForm: (req, res) => {
        const products = getProducts();
        const product = products.find(p => p.id == req.params.id);
        res.render('products/edit', { product });
    },

    // Actualizar un producto
    update: (req, res) => {
        const products = getProducts();
        const productIndex = products.findIndex(p => p.id == req.params.id);
        if (productIndex !== -1) {
            products[productIndex] = {
                ...products[productIndex],
                name_product: req.body.name_product,
                price: req.body.price,
                description: req.body.description,
                category_product: req.body.category_product,
                size: req.body.size.split(','),
                color: req.body.color.split(','),
                image: req.body.image
            };
            saveProducts(products);
        }
        res.redirect('/listProducts');
    },

    // Borrar un producto
    delete: (req, res) => {
        const products = getProducts();
        const filteredProducts = products.filter(p => p.id != req.params.id);
        saveProducts(filteredProducts);
        res.redirect('/listProducts');
    }
};
module.exports = productController;
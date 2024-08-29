const express = require('express');
const app = express();
const userRoutes = require('./routes/user');

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Usar las rutas definidas
app.use(userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
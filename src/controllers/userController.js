const path = require('path');

// Datos ficticios para demostrar
const users = {
    '1': { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    '2': { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
};

exports.getUserProfile = (req, res) => {
    const userId = req.params.id;
    const user = users[userId];

    if (!user) {
        return res.status(404).send('User not found');
    }

    // Enviar el archivo HTML y permitir que JavaScript en el cliente procese los datos
    res.sendFile(path.join(__dirname, '../views/profile.html'));
};
const isAuthenticated = (req, res, next) => {
    console.log('Session:', req.session);
    if (req.session.user) {
        return next(); // Si el usuario está autenticado, continúa
    } else {
        return res.redirect('/login'); // Si no, redirige al login
    }
};

module.exports = {
    isAuthenticated,
};
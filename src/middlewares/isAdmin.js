const isAdmin = (req, res, next) => {
    const {usuario} = req.session;
    if(usuario.tipoUsuario == "admin"){
        return next();
    }
    res.redirect("/");
}

module.exports = isAdmin;
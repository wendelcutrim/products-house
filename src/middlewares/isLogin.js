const isLogin = (req, res, next) => {
    if(!req.session.usuario){
        return res.redirect('/login');
    }
    res.locals.usuario = req.session.usuario;
    return next();

}

module.exports = isLogin;
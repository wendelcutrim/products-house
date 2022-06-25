const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

const AuthController = {
    showLogin: (rew, res) => {
        return res.render("home/login");
    },

    showCadastrar: (req, res) => {
        return res.render("home/cadastro");
    },

    store: (req, res) => {
        const {nome, email, senha} = req.body;
        const hash = bcrypt.hashSync(senha, 10);
        const verificaSeCadastrado = Usuario.findOne(email);

        if(verificaSeCadastrado){
            return res.render("home/cadastro", {error: "Não foi possível realizar o cadastro"});
        }

        const usuario = {
            nome,
            email,
            senha: hash
        }

        Usuario.create(usuario);

        return res.redirect("/login");
    },

    login: (req, res) => {
        const {email, senha} = req.body;
        const usuario = Usuario.findOne(email);

        if(!usuario || !bcrypt.compareSync(senha, usuario.senha)){
            return res.render("home/login", {error: "Email ou senha estão incorretos ou não existe."});
        }

        req.session.usuario = usuario;
        return res.redirect("/");

    },

    logout: (req, res) => {
        req.session.destroy(function(err) {
            // cannot access session here
        });

        return res.redirect('/login');
    },

};

module.exports = AuthController;
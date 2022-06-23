const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");

const AuthController = {
    showLogin: (req, res) => {
        return res.render("home/login");
    },
    login: (req, res) => {
        const {email, senha} = req.body;
        const usuario = Usuario.findOne(email);
        if(!usuario || !bcrypt.compareSync(senha, usuario.senha)){
            return res.render("home/login", {error: "Email ou senha estão incorretos ou não existe", old: req.body});
        }

        req.session.usuario = usuario;
        return res.redirect("/");
    },
    showCadastrar: (req, res) => {
        return res.render("home/cadastro");
    },
    store: (req, res) => {
        const {nome, email, senha} = req.body;
        const hash = bcrypt.hashSync(senha, 10);

        const verificaSeCadastrado = Usuario.findOne(email);
        if(verificaSeCadastrado){
            return res.render("home/cadastro", {error: "Não foi possível realizar o cadastro."})
        }

        const usuario = {nome, email, senha:hash};

        Usuario.create(usuario);

        return res.redirect("/login");
    },

    logout: (req, res) => {
        req.session.destroy(error => console.log(error));
        return res.redirect("/login");
    }
};

module.exports = AuthController;
const { localsName } = require("ejs");
const ProdutoModel = require("../models/produtoModel");

const HomeController = {
    showIndex: (req, res) => {
        const produtos = ProdutoModel.findAll();

        if(req.session.usuario){
            return res.render("home/landingpage", {produtos, usuario: req.session.usuario});
        }

        return res.render("home/landingpage", {produtos});

    },

    showOneProduct: (req, res) => {
        const { id } = req.params;
        const produto = ProdutoModel.findById(id);
        if(!produto){
            return res.render("home/not-found", {error: "Produto não encontrado"});
        }

        if(req.session.usuario){
            return res.render("produtos/detalhes", {produto, usuario: req.session.usuario});
        }

        return res.render("produtos/detalhes", {produto});
    }
};

module.exports = HomeController;